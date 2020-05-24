using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingApplication.Models
{
    public class DbBookingContext : DbContext
    {
        public DbBookingContext(DbContextOptions<DbBookingContext> options) : base(options)
        {

        }

        public DbSet<DbBooking> DBookings { get; set; }
    }
}
