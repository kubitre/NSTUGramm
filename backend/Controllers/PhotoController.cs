using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using nstugram1._1.Context;
using nstugram1._1.Models;

namespace nstugram1._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        private readonly NstugramContext _context;

        public PhotoController(NstugramContext context){
            this._context = context;
        }

        [HttpGet("{id}", Name = "GetPhotoById")]
        public ActionResult<Photo> GetById(long id)
        {
            var item = _context.Photos.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetPhotos([FromQuery]string filter){
            try{
                Regex reg_limit = new Regex("\"limit\":[0-9]{1,4}");
                Regex reg_offset = new Regex("\"offset\":[0-9]{1,4}");

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
                
                var postFromDb = from photo in this._context.Photos
                                 join usr in this._context.Users on photo.idOwner equals usr.id
                                 select new {
                                     userName = usr.username,
                                     userImage = usr.userImage,
                                     photoId = photo.id,
                                     photoAddress = photo.path,
                                     photoAlr = photo.alt,
                                     photoBody = photo.body,
                                     likesCount = photo.likes,
                                     timeCreated = photo.timeCreated,
                                 };
                

                return postFromDb.ToList();                        

            }
            catch(System.Exception e){
                return NotFound($"error: (errorcode: {e.Message})");
            }
            return NotFound("error: {errorcode: \"404\"}");
             //TODO: write method for filtering info in db
        }
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> UploadPhoto(PhotoViewModel model){
            var file = model.File;

            if(file.Length > 0){
                string path = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
                using(var filestream = new FileStream(Path.Combine(path, file.FileName), FileMode.Create)){
                    await file.CopyToAsync(filestream);
                }

                model.source = $"/uploads{file.FileName}";
                model.Extension = Path.GetExtension(file.FileName).Substring(1);
            }

            return BadRequest();
        }

        [HttpPost]
        public IActionResult Create(Photo item)
        {
            _context.Photos.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetPhotoById", new { id = item.id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, Photo item)
        {
            var todo = _context.Photos.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            todo.alt = item.alt;

            _context.Photos.Update(todo);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Photos.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Photos.Remove(todo);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
