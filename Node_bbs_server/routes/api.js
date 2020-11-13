const express = require("express");
const {bbsDAO} = require("../models");
const router = express.Router();

router.get("/" , (req, res) =>
{
    res.send("반갑습니다.");
});

router.get("/bbsList", (req, res) =>
{
    const list = [
        { id : 0, writer : "홍길동", subject : "게시판" },
        { id : 1, writer : "이몽룡", subject : "게시판" },
        { id : 2, writer : "성춘향", subject : "게시판" }
    ]
    bbsDAO.findAll({order : [ "b_date_time" ]}).then((bbsList) =>
    {
        res.json(bbsList);
    });
});

router.get("/insert", (req, res) =>
{
    bbsDAO.create(
        {
            b_writer    : req.query.writer || "이몽룡",
            b_date_time : Date().toString(),
            b_subject   : "게시판",
            b_content   : "게시판 작성 꿈에 보일라"
        }
    )
    .then((result) =>
    {
        res.redirect("/api/bbsList");
    })
    .catch((err) =>
    {
        res.json(err);
    })
})

module.exports = router;