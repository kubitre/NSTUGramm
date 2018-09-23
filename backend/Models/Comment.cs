namespace nstugram1._1.Models
{
    public class Comment
    {
        public long id{get;set;}
        public long idOwner{get;set;}
        public long idPhoto{get;set;}
        public string body{get;set;}
        public int likes{get;set;}
        public long replyId{get;set;}
        public long timeCreated{get;set;}
    }
}