using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using nstugram1._1.Context;
using nstugram1._1.Models;

namespace nstugram1._1.Controllers
{
    [Route("api/[controller]")]     
    [ApiController] 
    public class CommentController : ControllerBase
    {
        private readonly NstugramContext _context;

        public CommentController(NstugramContext context){
            this._context = context;
        }
        
        [HttpGet("{id}", Name = "GetCommentById")]
        public ActionResult<Comment> GetCommentById(long id)
        {
            var item = _context.Comments.Find(id);
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
        public IActionResult Create(Comment item)
        {
            _context.Comments.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetCommentById", new { id = item.id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, Comment item)
        {
            var todo = _context.Comments.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            //write update fields

            _context.Comments.Update(todo);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Comments.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(todo);
            _context.SaveChanges();

            return NoContent();
        }
    }
}