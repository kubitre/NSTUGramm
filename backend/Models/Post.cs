namespace nstugram1._1.Models
{
    public class Post
    {
        public long id{get;set;}
        public string userName{get;set;}
        public string userAdress{get;set;}
        public string photoAddress{get;set;}
        public string altImage{get;set;}
        public string photoBody{get;set;}
        public int likesCount{get;set;}
        public bool liked{get;set;}
        public bool haveEndedComment{get;set;}
        public string bodyEndedComment{get;set;}
        public long timeCreated{get;set;}
    }
}