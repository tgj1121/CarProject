using Microsoft.EntityFrameworkCore;

namespace CarProjectAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Car> Cars => Set<Car>();
    }
}
