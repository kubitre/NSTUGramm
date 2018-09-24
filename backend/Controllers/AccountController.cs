using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Claims;
using nstugram1._1.Models;
using nstugram1._1.helpClasses;
using Microsoft.Extensions.Primitives;

using nstugram1._1.Context;

namespace nstugram1._1.Controllers{
    public class AccountController : Controller
    {
        private readonly NstugramContext _context;
        public AccountController(NstugramContext context)
        {
            this._context = context;
        }

        [HttpPost("/token")]
        public async Task Token(){
            var username = Request.Form["username"];
            var password = Request.Form["password"];

            var identity = GetIdentity(username, password);
            if(identity != null){
                Response.StatusCode = 400;
                await Response.WriteAsync("invalid username or password!");
                return;
            }

            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecuritykey(), SecurityAlgorithms.HmacSha256)
            );
            
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new {
                access_token = encodedJwt,
                username = identity.Name
            };

            Response.ContentType = "application/json";
            await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
        }

        private ClaimsIdentity GetIdentity(StringValues username, StringValues password)
        {
            return null;
        }
    }
}