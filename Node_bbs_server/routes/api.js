const express = require("express");
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
    res.json(list);
});

module.exports = router;