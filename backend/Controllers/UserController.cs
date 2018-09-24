using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

using nstugram1._1.Context;
using nstugram1._1.Models;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace nstugram1._1.Controllers
{
    [Route("api/[controller]")]     
    [ApiController] 
    public class UserController : ControllerBase
    {
        private readonly NstugramContext _context;

        public UserController(NstugramContext context){
            this._context = context;
        }

        // [HttpGet]
        // public ActionResult<List<User>> GetAll()
        // {
        //     return _context.Users.ToList();
        // }

        [HttpGet("{id}", Name = "GetUserById")]
        public ActionResult<User> GetById(long id)
        {
            var item = _context.Users.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers([FromQuery]string filter){
            
            try{
                Regex reg_limit = new Regex("limit:[0-9]{1,4}");
                Regex reg_offset = new Regex("offset:[0-9]{1,4}");

                int limit = 0;
                int offset = 0;

                MatchCollection matches_of_limit = reg_limit.Matches(filter);
                MatchCollection matches_of_offset = reg_offset.Matches(filter);

                if(matches_of_limit.Count==1 && matches_of_offset.Count ==1){

                    limit = int.Parse(new Regex(@"[0-9]{1,4}").Matches(matches_of_limit[0].Value)[0].Value);
                    offset = int.Parse(new Regex(@"[0-9]{1,4}").Matches(matches_of_offset[0].Value)[0].Value);
                }
                else{
                    return NotFound("error: {errorcode: \"404\"}");
                }
            }
            catch(System.Exception e){
                return NotFound($"error: (errorcode: {e.Message})");
            }
            return NotFound("error: {errorcode: \"404\"}");
             //TODO: write method for filtering info in db
        }

        [HttpPost]
        public IActionResult Create(User item)
        {
            // var userFromDb = this._context.Users.Find(item.email);
            // if(userFromDb != null){
            //     return BadRequest("error: \"user-already-exist\"");
            // }
            _context.Users.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetUserById", new { id = item.id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, User item)
        {
            var todo = _context.Users.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            todo.email = item.email;
            todo.username = item.username;

            _context.Users.Update(todo);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Users.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Users.Remove(todo);
            _context.SaveChanges();

            return NoContent();
        }
    }
}