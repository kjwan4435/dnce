const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  // 항상 mongodb를 실행할 때마다 줄 configuration. new version에 맞춰서 설정해놓은거임 신경 ㄴㄴ
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

function handleOpen() {
  console.log("✅ connect to DB");
}
function handleError(error) {
  console.log(`❌ connection DB ERROR: ${error}`);
}

db.once("open", handleOpen);
db.on("error", handleError);
