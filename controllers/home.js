const Employer = require('../models/employer')


  //==========================================================================
 // Add New Employer
//==========================================================================
exports.getHomePage = (req,res,next) => {

    res.render('index',{pageTitle:'executive 81'});
  
  }

  //==========================================================================
 // Add or Edit  New Employer
//==========================================================================

  exports.postEmployer = (req,res,next) => {
    const vid = req.params.employerId;
    if (vid==0){
      console.log("Add:"+vid);
      const vname = req.body.name;
      const vaddress1 = req.body.address1;
      const vaddress2 = req.body.address2;
      const vaddress3 = req.body.address3;
      const vcity = req.body.city;
      const vstate = req.body.state;
      const vpin = req.body.pin;
      Employer.create({
        name: vname,
        address1:vaddress1,
        address2:vaddress2,
        address3:vaddress3,
        city:vcity,
        state:vstate,
        pin:vpin
 
     }).then(result => {
       console.log("employer created");
       res.redirect('/');
       
     }).catch(err=>    {
       console.log("error");
 
     });
 
    }else {
 
          console.log("Edit:"+vid);
          const vname = req.body.name;
          const vaddress1 = req.body.address1;
          const vaddress2 = req.body.address2;
          const vaddress3 = req.body.address3;
          const vcity = req.body.city;
          const vstate = req.body.state;
          const vpin = req.body.pin;
          Employer.update(
            { name: vname,
              address1:vaddress1,
              address2:vaddress2,
              address3:vaddress3,
              city:vcity,
              state:vstate,
              pin:vpin
      
            },
            { where : {id: vid}}
          ).then(result => {
            console.log("employer Updated");
            res.redirect('/');
            
          }).catch(err=>    {
            console.log("error");
      
          });

  }

  }
   



  //========================================================================
 //Delete single Employer by id
//==========================================================================

exports.getDelEmployer = (req,res,next) => 
{
  const vid = req.params.employerId;
  console.log("Del:"+vid);
  Employer.destroy({ where: {id: vid }});
  res.redirect('/home');
}

  //========================================================================
 //Get single Employer by id
//==========================================================================

  exports.getEmployer = (req,res,next) => 
  {
    const vid = req.params.employerId;
    if (vid!=0)
      {
        Employer.findByPk(vid) 
          .then(vEmployer=>{
            res.render('employer',{
            Employer:vEmployer,
            pageTitle:"Employer",
            btnTitle: "Update" });
          })
          .catch(err => console.log('Error'+ err));
      } else 
      
      {
        res.render('employer', {
          Employer:{
          id:0,
          name:"",
          address1:"",
          address2:"",
          address3:"",
          city:"",
          state:"",
          pin:""
          },
          pageTitle:"Employer",
          btnTitle: "Submit"
        })

      };
  }
      
  


  //========================================================================
 //Get All Employer list 
//==========================================================================

  exports.getEmployers = (req,res,next) => {
    Employer.findAll()
       .then(vEmployers=>{
       res.render('employers',{
         Employers:vEmployers, pageTitle:'Employers-List'
       });
    })
    .catch(err => console.log('Error'+ err));

    };