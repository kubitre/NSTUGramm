namespace nstugram1._1.Models
{
    public class Photo
    {
        public long id{get;set;}
        public long idOwner{get;set;}
        public string path{get;set;}
        public string body{get;set;}
        public string alt{get;set;}
        public int likes{get;set;}
        public long timeCreated{get;set;}
    }
}