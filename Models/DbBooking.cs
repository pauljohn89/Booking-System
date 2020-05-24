using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookingApplication.Models
{
    public class DbBooking
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string customerName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string venue { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime bookedDate { get; set; }
    }
}
