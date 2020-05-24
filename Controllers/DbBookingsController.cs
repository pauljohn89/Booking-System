using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookingApplication.Models;

namespace BookingApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbBookingsController : ControllerBase
    {
        private readonly DbBookingContext _context;

        public DbBookingsController(DbBookingContext context)
        {
            _context = context;
        }

        // GET: api/DbBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbBooking>>> GetDBookings()
        {
            return await _context.DBookings.ToListAsync();
        }

        // GET: api/DbBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DbBooking>> GetDbBooking(int id)
        {
            var dbBooking = await _context.DBookings.FindAsync(id);

            if (dbBooking == null)
            {
                return NotFound();
            }

            return dbBooking;
        }

        // PUT: api/DbBookings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDbBooking(int id, DbBooking dbBooking)
        {
            if (id != dbBooking.id)
            {
                return BadRequest();
            }

            _context.Entry(dbBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DbBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DbBookings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DbBooking>> PostDbBooking(DbBooking dbBooking)
        {
            _context.DBookings.Add(dbBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDbBooking", new { id = dbBooking.id }, dbBooking);
        }

        // DELETE: api/DbBookings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DbBooking>> DeleteDbBooking(int id)
        {
            var dbBooking = await _context.DBookings.FindAsync(id);
            if (dbBooking == null)
            {
                return NotFound();
            }

            _context.DBookings.Remove(dbBooking);
            await _context.SaveChangesAsync();

            return dbBooking;
        }

        private bool DbBookingExists(int id)
        {
            return _context.DBookings.Any(e => e.id == id);
        }
    }
}
