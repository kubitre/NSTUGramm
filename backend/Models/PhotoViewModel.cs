using Microsoft.AspNetCore.Http;

namespace backend.Models
{
    public class PhotoViewModel
    {
        public IFormFile File{get;set;}
        public string source {get;set;}
        public long Size{get;set;}
        public int Width{get;set;}
        public int Height{get;set;}
        public string Extension{get;set;}
    }
}