using CarProjectAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly DataContext _context;
        public CarController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Car>>> GetCars()
        {
            var cars = await _context.Cars.ToListAsync();
            return Ok(cars);
        }

        [HttpPost]
        public async Task<ActionResult<List<Car>>> CreateCar( Car car) {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();
            return await GetCars();
        }

        [HttpPut]
        public async Task<ActionResult<List<Car>>> UpdateCar(Car car)
        {
            var updateCar = _context.Cars.Where(x => x.Id == car.Id).FirstOrDefault();

            if (updateCar != null)
            {
                updateCar.Brand = car.Brand;
                updateCar.Type = car.Type;
                updateCar.Color = car.Color;
                _context.Cars.Update(updateCar);
                await _context.SaveChangesAsync();
            }
            
            return await GetCars();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Car>>> DeleteCar(int id)
        {
            var deleteCar = _context.Cars.Where(x => x.Id == id).FirstOrDefault();
            if (deleteCar != null)
            {
                _context.Cars.Remove(deleteCar);
                await _context.SaveChangesAsync();
            }           
            return await GetCars();
        }
    }
}
