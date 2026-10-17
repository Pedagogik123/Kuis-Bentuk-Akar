const questions = [
  {
    topic: "PENYEDERHANAAN AKAR",
    question: "Bentuk paling sederhana dari \\(\\sqrt{12}\\) adalah ...",
    options: ["\\(2\\sqrt{3}\\)", "\\(3\\sqrt{2}\\)", "\\(4\\sqrt{3}\\)", "\\(2\\sqrt{6}\\)"],
    answer: 0,
    explanation: "\\(\\sqrt{12}=\\sqrt{4\\cdot3}=\\sqrt4\\sqrt3=2\\sqrt3\\)."
  },
  {
    topic: "PERKALIAN BENTUK AKAR",
    question: "Nilai dari \\(\\sqrt{5}\\times\\sqrt{20}\\) adalah ...",
    options: ["\\(5\\)", "\\(10\\)", "\\(10\\sqrt5\\)", "\\(\\sqrt{25}\\sqrt{20}\\)"],
    answer: 1,
    explanation: "\\(\\sqrt5\\cdot\\sqrt{20}=\\sqrt{100}=10\\), karena kedua bilangan di dalam akar tidak negatif."
  },
  {
    topic: "PEMBAGIAN BENTUK AKAR",
    question: "Untuk \\(a\\geq0\\) dan \\(b>0\\), sifat pembagian bentuk akar yang benar adalah ...",
    options: ["\\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{a+b}\\)", "\\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{\\dfrac ab}\\)", "\\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{ab}\\)", "\\(\\dfrac{\\sqrt a}{\\sqrt b}=\\dfrac{a}{b}\\)"],
    answer: 1,
    explanation: "Untuk \\(a\\geq0\\) dan \\(b>0\\), berlaku \\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{\\dfrac ab}\\)."
  },
  {
    topic: "PENJUMLAHAN AKAR",
    question: "Hasil dari \\(3\\sqrt2+5\\sqrt2\\) adalah ...",
    options: ["\\(8\\sqrt2\\)", "\\(8\\sqrt4\\)", "\\(15\\sqrt2\\)", "\\(8\\sqrt{4}\\,\\sqrt2\\)"],
    answer: 0,
    explanation: "Bentuk akar sejenis dapat dijumlahkan dengan menjumlahkan koefisiennya: \\((3+5)\\sqrt2=8\\sqrt2\\)."
  },
  {
    topic: "PENGURANGAN AKAR",
    question: "Sederhanakan \\(7\\sqrt3-2\\sqrt3\\).",
    options: ["\\(5\\sqrt3\\)", "\\(5\\sqrt0\\)", "\\(9\\sqrt3\\)", "\\(5\\sqrt6\\)"],
    answer: 0,
    explanation: "Keduanya memiliki bagian akar yang sama, sehingga \\((7-2)\\sqrt3=5\\sqrt3\\)."
  },
  {
    topic: "AKAR SEJENIS",
    question: "Hasil paling sederhana dari \\(\\sqrt8+\\sqrt{18}\\) adalah ...",
    options: ["\\(5\\sqrt2\\)", "\\(\\sqrt{26}\\)", "\\(5\\sqrt{26}\\)", "\\(\\sqrt{10}\\)"],
    answer: 0,
    explanation: "\\(\\sqrt8=2\\sqrt2\\) dan \\(\\sqrt{18}=3\\sqrt2\\), jadi jumlahnya \\(5\\sqrt2\\)."
  },
  {
    topic: "PERKALIAN AKAR",
    question: "Nilai dari \\(\\sqrt3\\times\\sqrt{12}\\) adalah ...",
    options: ["\\(3\\)", "\\(6\\)", "\\(6\\sqrt3\\)", "\\(\\sqrt{15}\\)"],
    answer: 1,
    explanation: "\\(\\sqrt3\\cdot\\sqrt{12}=\\sqrt{36}=6\\)."
  },
  {
    topic: "KUADRAT BENTUK AKAR",
    question: "Untuk \\(x\\geq0\\), nilai \\((\\sqrt{x})^2\\) adalah ...",
    options: ["\\(\\sqrt{2x}\\)", "\\(x^2\\)", "\\(x\\)", "\\(|x|\\sqrt{x}\\)"],
    answer: 2,
    explanation: "Mengkuadratkan akar kuadrat mengembalikan bilangan di dalam akar: \\((\\sqrt{x})^2=x\\), untuk \\(x\\geq0\\)."
  },
  {
    topic: "AKAR PECAHAN",
    question: "Nilai \\(\\sqrt{\\dfrac{49}{64}}\\) adalah ...",
    options: ["\\(\\dfrac{7}{8}\\)", "\\(\\dfrac{49}{8}\\)", "\\(\\dfrac{7}{64}\\)", "\\(\\dfrac{8}{7}\\)"],
    answer: 0,
    explanation: "\\(\\sqrt{\\dfrac{49}{64}}=\\dfrac{\\sqrt{49}}{\\sqrt{64}}=\\dfrac78\\), dengan akar utama bernilai nonnegatif."
  },
  {
    topic: "PERKALIAN DAN PENYEDERHANAAN",
    question: "Bentuk paling sederhana dari \\(2\\sqrt3\\times3\\sqrt6\\) adalah ...",
    options: ["\\(6\\sqrt{18}\\)", "\\(18\\sqrt2\\)", "\\(6\\sqrt2\\)", "\\(18\\sqrt3\\)"],
    answer: 1,
    explanation: "\\(2\\sqrt3\\cdot3\\sqrt6=6\\sqrt{18}=6\\cdot3\\sqrt2=18\\sqrt2\\)."
  },
  {
    topic: "PENGURANGAN SETELAH MENYEDERHANAKAN",
    question: "Hasil dari \\(\\sqrt{50}-\\sqrt8\\) adalah ...",
    options: ["\\(3\\sqrt2\\)", "\\(7\\sqrt2\\)", "\\(\\sqrt{42}\\)", "\\(3\\sqrt{10}\\)"],
    answer: 0,
    explanation: "\\(\\sqrt{50}=5\\sqrt2\\) dan \\(\\sqrt8=2\\sqrt2\\), maka selisihnya \\(3\\sqrt2\\)."
  },
  {
    topic: "MERASIONALKAN PENYEBUT",
    question: "Bentuk yang setara dengan \\(\\dfrac{1}{\\sqrt5}\\) dan memiliki penyebut rasional adalah ...",
    options: ["\\(\\dfrac{1}{5}\\)", "\\(\\dfrac{\\sqrt5}{5}\\)", "\\(\\dfrac{5}{\\sqrt5}\\)", "\\(\\dfrac{\\sqrt5}{25}\\)"],
    answer: 1,
    explanation: "Kalikan pembilang dan penyebut dengan \\(\\sqrt5\\): \\(\\dfrac{1}{\\sqrt5}=\\dfrac{\\sqrt5}{5}\\)."
  },
  {
    topic: "PENYEDERHANAAN PECAHAN AKAR",
    question: "Untuk \\(x>0\\), hasil penyederhanaan \\(\\dfrac{3}{\\sqrt3}\\) adalah ...",
    options: ["\\(\\sqrt3\\)", "\\(3\\sqrt3\\)", "\\(\\dfrac{1}{\\sqrt3}\\)", "\\(\\sqrt6\\)"],
    answer: 0,
    explanation: "\\(\\dfrac3{\\sqrt3}=\\dfrac{3\\sqrt3}{3}=\\sqrt3\\)."
  },
  {
    topic: "DISTRIBUTIF PADA BENTUK AKAR",
    question: "Nilai \\(\\sqrt2(\\sqrt8+\\sqrt2)\\) adalah ...",
    options: ["\\(4\\)", "\\(6\\)", "\\(2\\sqrt{10}\\)", "\\(5\\)"],
    answer: 1,
    explanation: "\\(\\sqrt2\\cdot\\sqrt8+\\sqrt2\\cdot\\sqrt2=\\sqrt{16}+\\sqrt4=4+2=6\\)."
  },
  {
    topic: "IDENTITAS SELISIH KUADRAT",
    question: "Hasil dari \\((\\sqrt3+\\sqrt2)(\\sqrt3-\\sqrt2)\\) adalah ...",
    options: ["\\(5\\)", "\\(1\\)", "\\(\\sqrt6\\)", "\\(-1\\)"],
    answer: 1,
    explanation: "Gunakan \\((a+b)(a-b)=a^2-b^2\\): hasilnya \\(3-2=1\\)."
  },
  {
    topic: "SIFAT PERKALIAN",
    question: "Nilai \\(\\sqrt2\\times\\sqrt8\\) adalah ...",
    options: ["\\(2\\sqrt2\\)", "\\(4\\)", "\\(\\sqrt{10}\\)", "\\(8\\)"],
    answer: 1,
    explanation: "\\(\\sqrt2\\cdot\\sqrt8=\\sqrt{16}=4\\)."
  },
  {
    topic: "AKAR BILANGAN BESAR",
    question: "Bentuk paling sederhana dari \\(\\sqrt{72}\\) adalah ...",
    options: ["\\(6\\sqrt2\\)", "\\(8\\sqrt2\\)", "\\(3\\sqrt8\\)", "\\(12\\sqrt2\\)"],
    answer: 0,
    explanation: "\\(\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2\\)."
  },
  {
    topic: "FAKTOR DI LUAR AKAR",
    question: "Sederhanakan \\(\\dfrac{\\sqrt{27}}{3}\\).",
    options: ["\\(3\\sqrt3\\)", "\\(\\sqrt3\\)", "\\(\\dfrac{\\sqrt3}{3}\\)", "\\(\\sqrt9\\)"],
    answer: 1,
    explanation: "\\(\\sqrt{27}=3\\sqrt3\\), sehingga \\(\\dfrac{\\sqrt{27}}3=\\sqrt3\\)."
  },
  {
    topic: "KUADRAT BENTUK AKAR",
    question: "Nilai dari \\((2\\sqrt3)^2\\) adalah ...",
    options: ["\\(6\\)", "\\(12\\)", "\\(4\\sqrt3\\)", "\\(12\\sqrt3\\)"],
    answer: 1,
    explanation: "\\((2\\sqrt3)^2=2^2(\\sqrt3)^2=4\\cdot3=12\\)."
  },
  {
    topic: "OPERASI CAMPURAN",
    question: "Nilai \\(\\dfrac{\\sqrt6\\times\\sqrt{15}}{\\sqrt{10}}\\) adalah ...",
    options: ["\\(3\\)", "\\(\\sqrt3\\)", "\\(3\\sqrt2\\)", "\\(\\sqrt{31}\\)"],
    answer: 0,
    explanation: "\\(\\dfrac{\\sqrt{90}}{\\sqrt{10}}=\\sqrt9=3\\), karena penyebutnya tidak nol."
  }
];

const RESULTS_KEY = "kuisBentukAkar_examResults_v2";
const state = { current: 0, answers: Array(questions.length).fill(null), reviewMode: false, submitted: false };
const $ = (id) => document.getElementById(id);
const optionsList = $("optionsList");
const questionMap = $("questionMap");
let loginRole = "siswa";
let currentStudent = "";

function typeset(element) {
  if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([element]).catch(() => {});
}
function buildQuestionMap() {
  questionMap.innerHTML = "";
  questions.forEach((_, index) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "map-btn";
    button.textContent = String(index + 1).padStart(2, "0"); button.setAttribute("aria-label", `Buka soal ${index + 1}`);
    button.addEventListener("click", () => { state.current = index; renderQuestion(); }); questionMap.appendChild(button);
  });
}
function scoreNow() { return state.answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0); }
function renderProgress() {
  const answered = state.answers.filter(a => a !== null).length;
  $("progressText").textContent = `${answered} dari ${questions.length}`;
  $("progressFill").style.width = `${answered / questions.length * 100}%`;
  $("answeredCount").textContent = answered;
  $("scoreCount").textContent = state.submitted ? scoreNow() : "—";
  [...questionMap.children].forEach((button, index) => {
    button.classList.toggle("current", index === state.current); button.classList.toggle("answered", state.answers[index] !== null);
    button.setAttribute("aria-current", index === state.current ? "step" : "false");
  });
}
function renderQuestion() {
  const q = questions[state.current];
  $("questionTopic").textContent = q.topic;
  $("questionCounter").textContent = `SOAL ${String(state.current + 1).padStart(2, "0")} / ${questions.length}`;
  $("questionNumber").textContent = String(state.current + 1).padStart(2, "0");
  $("questionText").innerHTML = q.question; optionsList.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "option-btn";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-label">${option}</span>`;
    button.disabled = state.submitted || state.reviewMode;
    if (state.answers[state.current] === index) button.classList.add("selected");
    if (state.submitted || state.reviewMode) {
      if (index === q.answer) button.classList.add("correct");
      if (state.answers[state.current] === index && index !== q.answer) button.classList.add("incorrect");
    }
    button.addEventListener("click", () => { if (!state.submitted && !state.reviewMode) { state.answers[state.current] = index; renderQuestion(); } });
    optionsList.appendChild(button);
  });
  const feedback = $("feedbackBox");
  if (state.submitted || state.reviewMode) {
    feedback.hidden = false; const chosen = state.answers[state.current]; const correct = chosen === q.answer;
    feedback.classList.toggle("wrong", chosen !== null && !correct);
    $("feedbackIcon").textContent = correct ? "✓" : "!";
    $("feedbackTitle").textContent = chosen === null ? "Belum dijawab" : correct ? "Jawaban benar" : "Jawaban belum tepat";
    $("feedbackText").innerHTML = `${q.explanation}${chosen === null ? " Soal ini tidak dijawab." : ""}`;
  } else { feedback.hidden = true; feedback.classList.remove("wrong"); }
  $("prevBtn").disabled = state.current === 0;
  $("nextBtn").disabled = false;
  $("nextBtn").innerHTML = state.current === questions.length - 1 ? (state.submitted || state.reviewMode ? "Lihat Hasil <span>→</span>" : "Kumpulkan Ujian ✓") : "Berikutnya <span>→</span>";
  renderProgress(); typeset($("quizArea")); typeset(optionsList);
}
function showResults() {
  const correct = scoreNow(); const score = Math.round(correct / questions.length * 100);
  $("quizArea").hidden = true; $("resultPanel").hidden = false;
  $("finalScore").textContent = score; $("finalCorrect").textContent = correct;
  $("finalWrong").textContent = questions.length - correct;
  $("scoreRing").style.setProperty("--score-angle", `${score * 3.6}deg`);
  $("resultMessage").textContent = score >= 85 ? "Luar biasa! Pemahamanmu tentang sifat-sifat bentuk akar sudah sangat baik." : score >= 70 ? "Bagus! Pelajari kembali materi yang masih perlu dikuasai." : "Terus berlatih dan pelajari kembali sifat-sifat bentuk akar.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function submitExam() {
  if (state.submitted) { showResults(); return; }
  const unanswered = state.answers.filter(a => a === null).length;
  const message = unanswered ? `Masih ada ${unanswered} soal belum dijawab. Kumpulkan ujian sekarang? Soal kosong dihitung salah.` : "Kumpulkan jawaban ujian sekarang? Setelah dikumpulkan, jawaban tidak dapat diubah.";
  if (!window.confirm(message)) return;
  state.submitted = true;
  const correct = scoreNow();
  const attempt = { name: currentStudent, date: new Date().toLocaleString("id-ID"), timestamp: new Date().toISOString(), correct, total: questions.length, score: Math.round(correct / questions.length * 100), answers: state.answers.map((a, i) => a === null ? "" : String.fromCharCode(65 + a)), detail: state.answers.map((a, i) => ({ nomor: i + 1, jawaban: a === null ? "" : String.fromCharCode(65 + a), kunci: String.fromCharCode(65 + questions[i].answer), benar: a === questions[i].answer })) };
  try { const all = JSON.parse(localStorage.getItem(RESULTS_KEY) || "[]"); all.push(attempt); localStorage.setItem(RESULTS_KEY, JSON.stringify(all)); }
  catch (e) { alert("Hasil tidak dapat disimpan pada browser ini. Catat nilai sebelum menutup halaman."); }
  showResults();
}
function goNext() {
  if (state.current < questions.length - 1) { state.current++; renderQuestion(); return; }
  if (state.submitted || state.reviewMode) showResults(); else submitExam();
}
function reviewAnswers() {
  state.reviewMode = true; state.current = 0; $("resultPanel").hidden = true; $("quizArea").hidden = false; renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function restartQuiz() {
  state.current = 0; state.answers = Array(questions.length).fill(null); state.reviewMode = false; state.submitted = false;
  $("resultPanel").hidden = true; $("quizArea").hidden = false; renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function readResults() { try { return JSON.parse(localStorage.getItem(RESULTS_KEY) || "[]"); } catch { return []; } }
function renderTeacherResults() {
  const results = readResults(); $("totalAttempts").textContent = results.length;
  $("averageScore").textContent = results.length ? Math.round(results.reduce((s, r) => s + Number(r.score || 0), 0) / results.length) : "0";
  $("highestScore").textContent = results.length ? Math.max(...results.map(r => Number(r.score || 0))) : "0";
  const body = $("resultsTableBody"); body.innerHTML = "";
  if (!results.length) { body.innerHTML = '<tr><td colspan="5">Belum ada hasil ujian tersimpan di browser ini.</td></tr>'; return; }
  [...results].reverse().forEach((r, idx) => { const tr = document.createElement("tr");
    [String(results.length - idx), r.name || "—", r.date || "—", `${r.correct ?? 0}/${r.total ?? 20}`, r.score ?? 0].forEach((value) => { const td = document.createElement("td"); td.textContent = value; tr.appendChild(td); }); body.appendChild(tr);
  });
}
function downloadResults() {
  const results = readResults();
  if (!results.length) { alert("Belum ada hasil ujian untuk diunduh pada browser ini."); return; }
  const rows = [["No","Nama Siswa","Tanggal dan Waktu","Jawaban Benar","Jumlah Soal","Nilai", ...questions.map((_, i) => `Jawaban ${i + 1}`)]];
  results.forEach((r, i) => rows.push([i + 1, r.name, r.date, r.correct, r.total, r.score, ...(r.answers || [])]));
  const csv = "\uFEFF" + rows.map(row => row.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" }); const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `hasil-ujian-bentuk-akar-${new Date().toISOString().slice(0,10)}.csv`; a.click(); URL.revokeObjectURL(url);
}
function setLoginRole(role) {
  loginRole = role; const isStudent = role === "siswa";
  $("studentRoleBtn").classList.toggle("active", isStudent); $("teacherRoleBtn").classList.toggle("active", !isStudent);
  $("nameLabel").textContent = isStudent ? "Nama lengkap siswa" : "Nama guru (opsional)";
  $("fullName").placeholder = isStudent ? "Masukkan nama lengkap" : "Masukkan nama guru (opsional)";
  $("fullName").required = isStudent; $("fullName").value = ""; $("loginPassword").value = ""; $("loginError").hidden = true;
  $("loginForm").querySelector("button[type='submit']").innerHTML = isStudent ? "Masuk ke Ujian <span>→</span>" : "Buka Rekap Hasil <span>→</span>";
}
function logout() { $("loginScreen").hidden = false; $("appContent").hidden = true; $("teacherPanel").hidden = true; $("studentHero").hidden = false; $("quizArea").hidden = false; $("resultPanel").hidden = true; $("fullName").value = ""; $("loginPassword").value = ""; setLoginRole("siswa"); }
$("studentRoleBtn").addEventListener("click", () => setLoginRole("siswa"));
$("teacherRoleBtn").addEventListener("click", () => setLoginRole("guru"));
$("loginForm").addEventListener("submit", (event) => {
  event.preventDefault(); const name = $("fullName").value.trim(); const password = $("loginPassword").value; const expected = loginRole === "siswa" ? "12345" : "admin12345"; const error = $("loginError");
  if (loginRole === "siswa" && !name) { error.textContent = "Silakan masukkan nama lengkap."; error.hidden = false; return; }
  if (password !== expected) { error.textContent = "Password tidak sesuai. Silakan coba lagi."; error.hidden = false; $("loginPassword").focus(); return; }
  error.hidden = true; currentStudent = name; $("loginScreen").hidden = true; $("appContent").hidden = false;
  if (loginRole === "guru") { $("studentHero").hidden = true; $("quizArea").hidden = true; $("resultPanel").hidden = true; $("teacherPanel").hidden = false; renderTeacherResults(); }
  else { $("teacherPanel").hidden = true; $("studentHero").hidden = false; $("quizArea").hidden = false; $("resultPanel").hidden = true; $("studentHero").querySelector(".hero-copy > p").textContent = `Ujian dimulai, ${name}. Kerjakan 20 soal dengan teliti. Jawaban dan nilai akan ditampilkan setelah ujian dikumpulkan.`; restartQuiz(); }
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("prevBtn").addEventListener("click", () => { if (state.current > 0) { state.current--; renderQuestion(); } });
$("nextBtn").addEventListener("click", goNext); $("reviewBtn").addEventListener("click", reviewAnswers); $("restartBtn").addEventListener("click", restartQuiz);
$("teacherLogoutBtn").addEventListener("click", logout); $("refreshResultsBtn").addEventListener("click", renderTeacherResults); $("downloadResultsBtn").addEventListener("click", downloadResults);
buildQuestionMap(); renderQuestion();
