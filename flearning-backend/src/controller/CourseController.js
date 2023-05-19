import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const CourseController = {
  getCourses: async (req, res) => {
    let queryString = `SELECT * FROM [Course]`;
    let data = await executeQuery(queryString);
    console.log("courses", data);
    return res.json({courses: data});
  },
  insertCourse: async (req, res) => {
    const course = req.body;
    console.log("course is being inserted", course);
    let queryString = `INSERT INTO [dbo].[Course]
                            ([course_avatar_url]
                            ,[course_name]
                            ,[description]
                            ,[duration]
                            ,[price]
                            ,[status])
                        VALUES
                            (
                              '${course.course_name}',
                              '${course.description}', 
                              '${course.duration}', 
                              '${course.price}', 
                              '${course.status}', 
                              '${course.course_avatar_url}')`;
    const data = await executeNonQuery(queryString);
    // console.log(data);

    return res.json({ course: course, rowAffected: data });
  },
  updateCourse: async (req, res) => {
    const course = req.body;
    console.log(req.body);

    queryString = `UPDATE [dbo].[Course]
                 SET [course_name] = '${course.course_name}'
                    ,[description] =  '${course.description}'
                    ,[course_avatar_url] = '${course.course_avatar_url}'
                    ,[duration] = '${course.duration}'
                    ,[price] = '${course.price}'
                    ,[status] = '${course.status}'
                 WHERE [course_id] =  ${course.course_id}`;
    const data = await executeNonQuery(queryString);

    return res.json({
      courseId: course.course_id,
      rowAffected: data,
    });
  },
};

export default CourseController;
