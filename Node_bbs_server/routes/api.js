const express = require("express");
const {bbsDAO} = require("../models"); // 폴더의 index.js 파일이 있을 경우 폴더를 require()하면 index.js 파일이 읽키게 된다.
const router = express.Router();

router.get("/" , (req, res) =>{
    res.send("반갑습니다.");
});

router.get("/bbsList", (req, res) =>{
    const list = [
        { id : 0, writer : "홍길동", subject : "게시판" },
        { id : 1, writer : "이몽룡", subject : "게시판" },
        { id : 2, writer : "성춘향", subject : "게시판" }
    ]
    bbsDAO.findAll({order : [["b_date_time" , "DESC"]] }).then((bbsList) => {
        res.json(bbsList);
    });
});

/*
    web browser로 부터 데이터 전달받기
    ?변수=값 : req.query.변수
    /:변수 : req.params.변수
    form의 input tag에서 name으로 설정된 변수 : req.body.변수
    ajax를 통해서 전달받은 데이터 : req.body.변수
*/
router.post("/insert", (req, res) =>{
    bbsDAO.create({
            b_writer    : req.body.b_writer,
            b_date_time : Date().toString(),
            b_subject   : req.body.b_subject,
            b_content   : req.body.b_content
        })
        .then((result) =>{
            console.log(result);
            res.redirect("/api/bbsList");
        })
    .catch((err) =>{
        res.json(err);
    })
})
// 전통적인 query 방식
router.get("/view", (req, res)=>{

    const b_id = req.query.id;
    bbsDAO.findOne({
        where : {b_id : Number(b_id)},
    }).then((result) =>{ res.json(result); });
})

//restful 방식
router.get("/view/:id", (req, res) => {

  const b_id = req.params.id;
  bbsDAO.findOne({
      where: { b_id: Number(b_id) },
    }).then((result) => { res.json(result); });

});


router.post("/update", (req, res)=>{
    // const b_id = req.params.id;
    bbsDAO.update({
            b_writer    : req.body.b_writer,
            b_subject   : req.body.b_subject,
            b_content   : req.body.b_content,

    }, {where : {b_id : Number(req.body.b_id)} }
    ).then((result) =>{
        res.redirect("/api/bbisList");
    }
    ).catch((err) =>{
        res.json(err);
    });
});


router.delete("/delete/:id", (req, res)=>{
    const b_id = req.params.id;
    bbsDAO.destroy({
        where : {b_id : Number(b_id)},
    })
    .then((result)=>{
        res.redirect("/api/bbsList");
    });
})

module.exports = router;