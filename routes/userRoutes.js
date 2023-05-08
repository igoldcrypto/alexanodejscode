const express = require("express")
const { homes } = require("../controllers/DailyReward")
const { MatchingBonus } = require("../controllers/MatchingBonus")
const { GlobalBonusMonthly } = require("../controllers/GlobalBonusMonthly")
const { ClaimRankEligibility } = require("../controllers/ClaimRankEligibility")
const { CountMyTeam } = require("../controllers/CountMyTeam")
const { CountMyLeftRightDirects } = require("../controllers/CountMyLeftRightDirects")



const router = express.Router();

router.get("/dailyBonus", homes)
router.get("/matchiingBonus", MatchingBonus)
router.get("/globalBonusMonthly", GlobalBonusMonthly)
router.post("/ClaimRankEligibility", ClaimRankEligibility)
router.post("/CountMyTeam", CountMyTeam)
router.post("/CountMyLeftRightDirects", CountMyLeftRightDirects)


module.exports = router;