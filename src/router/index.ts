import Login from '../view/Login/login'
import Index from '../view/Home/index'
import Class from '../view/Home/class/index'
import Student from '../view/Home/class/student'
import Teacher from '../view/Home/class/teacher'
import Addexam from '../view/Home/exam/addexam'
import Exam from '../view/Home/exam/index'
import Marking from '../view/Home/marking/index'
import Adduser from '../view/Home/user/adduser'
import User from '../view/Home/user/index'
import Add from '../view/Home/test/add'
import Classification from '../view/Home/test/classification'
import Test from '../view/Home/test/index'
export default {
  routes:[
  {
     path:'/login',
     component:Login,
  },
  {
    path:'/index',
    component:Index,
    children:[{
      path:'/index/class',
      component:Class
    },{
      path:'/index/student',
      component:Student
    },{
      path:'/index/teacher',
      component:Teacher
    },
    {
      path:'/index/addexam',
      component:Addexam
    },{
      path:'/index/exam',
      component:Exam
    },{
      path:'/index/marking',
      component:Marking
    },{
      path:'/index/adduser',
      component:Adduser
    },{
      path:'/index/user',
      component:User
    },{
      path:'/index/add',
      component:Add
    },{
      path:'/index/test',
      component:Test
    },{
      path:'/index/classification',
      component:Classification
    }]
  }]
}
