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
    public class LikeController : ControllerBase
    {
        private readonly NstugramContext _context;

        public LikeController(NstugramContext context){
            this._context = context;
        }

        [HttpGet("{id}", Name = "GetLikeById")]
        public ActionResult<Like> GetById(long id)
        {
            var item = _context.Likes.Find(id);
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
        public IActionResult Create(Like item)
        {
            var photoFromDb = this._context.Photos.Find(item.idPhoto);
            if(photoFromDb != null){
                var likeFromDb = this._context.Likes.Find(item.idOwner, item.idPhoto);
                if(likeFromDb != null){
                    return CreatedAtRoute("DeleteLikeFromPhoto", likeFromDb.id);
                }
                _context.Likes.Add(item);
                _context.SaveChanges();

                return CreatedAtRoute("GetLikeById", new { id = item.id }, item);
            }
            else{
                return NotFound($"error: (photo-not-found)");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, Like item)
        {
            var todo = _context.Likes.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            //write update fields

            _context.Likes.Update(todo);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}", Name="DeleteLikeFromPhoto")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Likes.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Likes.Remove(todo);
            _context.SaveChanges();

            return NoContent();
        }
    }
}