using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dateOfB){
            var today =  DateTime.Now;
            var age = today.Year - dateOfB.Year;
            if( dateOfB.Date > today.AddYears(-age)) age--;
            return age;
        }
    }
}