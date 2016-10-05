using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularAssignment.Controllers
{
    public class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
        public string CollegeName { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
        public string About { get; set; }
        public int Contact { get; set; }
    }

    public class HomeController : Controller
    {
        public HomeController()
        {
            Students = GetStudentData();
        }

        List<Student> Students = new List<Student>();
    
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]      
        public JsonResult GetData()
        {
            return Json(Students, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Post(Student student)
        {
            UpdateStudentData(student);       
            return new JsonResult() { Data = Students.OrderBy(x=>x.StudentId).ToList() };
        }

        private List<Student> GetStudentData(Student stud = null)
        {
            List<Student> student = new List<Student>() { 
            new Student{ StudentId=1, StudentName="Ruchika", Age=18,CollegeName="Shivaji",Address="Pune",About="About",Department="CSE"},
            new Student{ StudentId=2, StudentName="Rani", Age=19,CollegeName="Ycce",Address="Nagpur",About="About",Department="IT"},
            new Student{  StudentId=3,StudentName="Prashant", Age=20,CollegeName="MIT",Address="Mumbai",About="About",Department="EE"},
            new Student{  StudentId=4,  StudentName="Sadana", Age=21,CollegeName="SVSS",Address="Pune",About="About",Department="ETC"}
            };
            return student.OrderBy(x=>x.StudentId).ToList();
        }

        private void UpdateStudentData(Student newStudent)
        {
            if (newStudent != null)
            {
                var oldRec = Students.Where(x => x.StudentId == newStudent.StudentId).FirstOrDefault();
                Students.Remove(oldRec);
                Students.Add(newStudent);
            }
        }

    }
}