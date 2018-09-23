using Microsoft.EntityFrameworkCore;
using nstugram1._1.Models;

namespace nstugram1._1.Context
{
    public class NstugramContext : DbContext
    {
        public NstugramContext(DbContextOptions<NstugramContext> options): base(options){}

        public DbSet<User> Users{get;set;}
        public DbSet<Photo> Photos{get;set;}
        public DbSet<Like> Likes{get;set;}
        public DbSet<Comment> Comments{get;set;}
        public DbSet<Following> Followings{get;set;}
        
    }
}