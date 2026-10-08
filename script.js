(function(){
var A={
services:"<strong>I build</strong> full-stack web apps, Flutter mobile apps, FastAPI backends, AWS S3 security checks, data analysis and Python automation. See the Services section for details.",
project:"My standout project is <strong>S3Guard</strong>, which scans AWS S3 buckets for risky settings and fixes them in one click. I also have LiDAR research from IIIT Dharwad and several Flutter apps.",
hire:"Message me on <strong>WhatsApp</strong> or email with what you need. I'll reply with a plan, timeline and quote.",
aws:"I build tools that find S3 and IAM misconfigurations, report them clearly and apply fixes. S3Guard is a working example.",
flutter:"I've built Flutter apps with Firebase and FastAPI backends for healthcare, college and finance use cases.",
data:"I clean and analyze data with Pandas and NumPy, then present it with Matplotlib charts in reusable Jupyter notebooks.",
lidar:"At IIIT Dharwad I worked on estimating vehicle speed from LiDAR point clouds, including camera-LiDAR calibration.",
fallback:"I can help with web apps, mobile apps, APIs, cloud security and data analysis. Try asking about services, projects or hiring me."
};
function pick(t){t=t.toLowerCase();
if(/hire|price|cost|quote|contact|available|work with/.test(t))return A.hire;
if(/s3|aws|cloud|secur|iam/.test(t))return A.aws;
if(/flutter|mobile|android|ios|app/.test(t)&&!/web/.test(t))return A.flutter;
if(/data|pandas|chart|analy/.test(t))return A.data;
if(/lidar|iiit|dharwad|research/.test(t))return A.lidar;
if(/best|project|work|portfolio/.test(t))return A.project;
if(/service|build|do|offer|can you/.test(t))return A.services;
return A.fallback}
var f=document.getElementById("f"),q=document.getElementById("q"),o=document.getElementById("ans");
function show(t){o.innerHTML=pick(t)}
f.addEventListener("submit",function(e){e.preventDefault();if(q.value.trim())show(q.value)});
document.querySelectorAll(".chip").forEach(function(c){c.addEventListener("click",function(){q.value=c.textContent;show(c.dataset.q)})});
})();
