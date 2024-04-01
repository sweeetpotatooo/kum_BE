const express = require('express');
const userDBC = require('./usersDBC');
const router = express.Router();

router.get('/getUsers', async (req, res)=>
{
    let res_get_users = 
    {
        status_code : 500,
        User : [] 
    };

    try
    {
        const rows = await userDBC.getUsers();
        res_get_users.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((User)=>
            {
                res_get_users.User.push
                ({
                    userId : User.user_id,
                    usernickname : User.nickname,
                    useremail : User.email,
                    userPassword : User.password,
                    userage : User.age,
                    userName : User.name,
                    userStudent_id : User.student_id
                });
            });
        }
        else
        {
            console.log('사용자 없음');
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
    finally
    {

        //응답 
        //res.json(res_get_users);
        var result = '';

        for(var i=0; i < res_get_users.User.length; i++)
        {
        result += res_get_users.User[i].userId;
        result += "\t";
        result += res_get_users.User[i].usernickname;
        result += "\t";
        result += res_get_users.User[i].useremail;
        result += "\t";
        result += res_get_users.User[i].userPassword;
        result += "\t";
        result += res_get_users.User[i].userName;
        result += "\t";
        result += res_get_users.User[i].userage;
        result += "\t";
        result += res_get_users.User[i].userStudent_id;
        result += "\t";
        
        result += "<br>";
        }

        res.send(result);
    }
});


module.exports = router;