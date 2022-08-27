

class Student{
    firstName;
    lastName;
    sectionNumber;
    schoolName;
    constructor(firstName,lastName,schoolName,sectionNumber){
        this.firstName=firstName;
        this.lastName=lastName;
        this.sectionNumber=sectionNumber
        this.schoolName=schoolName
        
    }

   

}

class Section{
    sectionNumber;
    listOfStudent=[];

    constructor(sectionNumber,listOfStudent){
        this.sectionNumber=sectionNumber;
        this.listOfStudent=listOfStudent;
    }
    getStudentInfo(){
        return this.listOfStudent;
    }
  
}

class Shcool{
    shcoolName;
    listOfSections=[];
    constructor(shcoolName,listOfSections){
        this.shcoolName=shcoolName;
        this.listOfSections=listOfSections;
    }


    getSectionInfo(){
        return this.listOfSections;
    }

    getTotalStudentsShcool(){
        let totalNumber=0;
        let students=[];

        for (let section of this.listOfSections) {
            students = section.getStudentInfo();
 
            for (let student of students) {
                totalNumber++;
            }
        }return totalNumber;
    }
}



let student1= new Student('Husam','kh','1','1');
let student2= new Student('Bushra','mh','1','2');

let student3= new Student('noh','kh','2','1');
let student4= new Student('moh','mh','2','2');



const studentsNumOfSection1=[];
const studentsNumOfSection2=[];
const sectionsNum=[];
const school_1=[];
const school_2=[];



studentsNumOfSection1.push(student1);
studentsNumOfSection1.push(student2);
studentsNumOfSection2.push(student3);
studentsNumOfSection2.push(student4);

 let section1=new Section('section_1',studentsNumOfSection1);
 let section2=new Section('section_2',studentsNumOfSection2);

 sectionsNum.push(section1);
 sectionsNum.push(section2);






 let school1=new Shcool('school_1',sectionsNum);
 let school2=new Shcool('school_2',sectionsNum);
 
 
 school_1.push(school1);
 school_2.push(school2);
 




 console.log(school1.getTotalStudentsShcool());
 
 for(let school in school_1){
      console.log("___________________________");
      console.log(school_1[school]);
    for(section in sectionsNum){
      console.log(sectionsNum[section]);
     }

 }