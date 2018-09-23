using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace nstugram1._1.helpClasses
{
    public class AuthOptions
    {
        public const string ISSUER = "NstrugramAuthServer";
        public const string AUDIENCE = "https://localhost:5001/";
        const string KEY = "mazahaka1998";
        public const int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecuritykey(){
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}