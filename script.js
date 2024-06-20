const questions = [
    {
        question: "Apa fungsi dari callback dalam JavaScript?",
        answers: {
            a: "Untuk membuat variabel",
            b: "Untuk memanggil fungsi setelah fungsi lain selesai",
            c: "Untuk mengubah tipe data",
            d: "Untuk menghapus elemen DOM"
        },
        correctAnswer: "b",
        explanation: "Callback digunakan untuk menjalankan fungsi setelah fungsi lain selesai, terutama dalam operasi asinkron."
    },
    {
        question: "Apa perbedaan utama antara synchronous dan asynchronous?",
        answers: {
            a: "Synchronous memerlukan server, asynchronous tidak",
            b: "Synchronous harus menunggu proses sebelumnya selesai, asynchronous tidak",
            c: "Asynchronous memerlukan lebih banyak memori",
            d: "Synchronous hanya digunakan di sisi server"
        },
        correctAnswer: "b",
        explanation: "Dalam synchronous, setiap fungsi harus menunggu fungsi sebelumnya selesai. Dalam asynchronous, fungsi bisa berjalan tanpa menunggu fungsi sebelumnya selesai."
    },
    {
        question: "Manakah dari berikut ini yang merupakan status Promise?",
        answers: {
            a: "Initiated",
            b: "Finished",
            c: "Fulfilled",
            d: "Approved"
        },
        correctAnswer: "c",
        explanation: "Promise memiliki tiga status: pending, fulfilled, dan rejected. Fulfilled berarti operasi telah berhasil."
    },
    {
        question: "Apa tujuan utama dari async/await?",
        answers: {
            a: "Untuk menghapus callback",
            b: "Untuk menulis kode asinkron dengan cara yang lebih mudah",
            c: "Untuk membuat variabel global",
            d: "Untuk meningkatkan performa aplikasi"
        },
        correctAnswer: "b",
        explanation: "Async/await digunakan untuk menulis kode asinkron dengan cara yang lebih mudah dipahami dan ditulis."
    },
    {
        question: "Bagaimana cara menangani error dalam async/await?",
        answers: {
            a: "Menggunakan `try` dan `catch`",
            b: "Menggunakan `if` dan `else`",
            c: "Menggunakan `for` dan `while`",
            d: "Menggunakan `switch` dan `case`"
        },
        correctAnswer: "a",
        explanation: "Dalam async/await, error ditangani menggunakan blok try dan catch."
    },
    {
        question: "Apa singkatan dari JSON?",
        answers: {
            a: "Java Standard Object Notation",
            b: "JavaScript Object Notation",
            c: "Java Simple Object Notation",
            d: "JavaScript Operational Notation"
        },
        correctAnswer: "b",
        explanation: "JSON adalah singkatan dari JavaScript Object Notation."
    },
    {
        question: "Bagaimana cara mengonversi objek JavaScript menjadi JSON?",
        answers: {
            a: "JSON.convert()",
            b: "JSON.stringify()",
            c: "JSON.parse()",
            d: "JSON.change()"
        },
        correctAnswer: "b",
        explanation: "JSON.stringify() digunakan untuk mengonversi objek JavaScript menjadi string JSON."
    },
    {
        question: "Apa peran `export` dalam JavaScript modules?",
        answers: {
            a: "Untuk mengimpor modul dari file lain",
            b: "Untuk menghapus modul",
            c: "Untuk mendeklarasikan variabel global",
            d: "Untuk mengekspor fungsi atau variabel dari file"
        },
        correctAnswer: "d",
        explanation: "Export digunakan untuk mengekspor fungsi atau variabel dari file sehingga bisa diimpor di file lain."
    },
    {
        question: "Apa yang dimaksud dengan `pending` dalam konteks Promise?",
        answers: {
            a: "Promise telah sukses",
            b: "Promise telah gagal",
            c: "Promise sedang dalam proses",
            d: "Promise telah selesai"
        },
        correctAnswer: "c",
        explanation: "Pending adalah status awal dari promise, di mana promise sedang dalam proses."
    },
    {
        question: "Manakah pernyataan yang benar tentang `setTimeout()` dalam JavaScript?",
        answers: {
            a: "Hanya dapat digunakan untuk operasi sinkron",
            b: "Digunakan untuk menunda eksekusi fungsi",
            c: "Digunakan untuk menghentikan eksekusi fungsi",
            d: "Digunakan untuk mempercepat eksekusi fungsi"
        },
        correctAnswer: "b",
        explanation: "setTimeout() digunakan untuk menunda eksekusi fungsi."
    },
    {
        question: "Mengapa asynchronous penting dalam JavaScript?",
        answers: {
            a: "Untuk mempermudah debugging",
            b: "Untuk meningkatkan performa dengan tidak menunggu proses yang memakan waktu lama",
            c: "Untuk membuat kode lebih sulit dipahami",
            d: "Untuk mengurangi penggunaan memori"
        },
        correctAnswer: "b",
        explanation: "Asynchronous penting untuk meningkatkan performa dengan tidak menunggu proses yang memakan waktu lama, sehingga tugas lain bisa dieksekusi."
    },
    {
        question: "Apa metode yang digunakan untuk menangani kasus promise yang berhasil?",
        answers: {
            a: ".finally()",
            b: ".catch()",
            c: ".then()",
            d: ".resolve()"
        },
        correctAnswer: "c",
        explanation: ".then() digunakan untuk menangani kasus promise yang berhasil."
    },
    {
        question: "Apa yang terjadi jika `await` digunakan di luar fungsi `async`?",
        answers: {
            a: "Tidak ada yang terjadi",
            b: "Akan mengembalikan nilai yang sama",
            c: "Akan menyebabkan error",
            d: "Fungsi tetap berjalan seperti biasa"
        },
        correctAnswer: "c",
        explanation: "Await hanya bisa digunakan di dalam fungsi async. Jika digunakan di luar, akan menyebabkan error."
    },
    {
        question: "Apa yang dilakukan `JSON.parse()` dalam JavaScript?",
        answers: {
            a: "Mengubah objek JavaScript menjadi string JSON",
            b: "Mengubah string JSON menjadi objek JavaScript",
            c: "Menghapus elemen dari DOM",
            d: "Menambah elemen ke DOM"
        },
        correctAnswer: "b",
        explanation: "JSON.parse() digunakan untuk mengubah string JSON menjadi objek JavaScript."
    },
    {
        question: "Bagaimana cara menangani error menggunakan `try` dan `catch`?",
        answers: {
            a: "`try` untuk mendefinisikan error, `catch` untuk menangkap error",
            b: "`try` untuk menangkap error, `catch` untuk mendefinisikan error",
            c: "`try` untuk menjalankan kode yang mungkin error, `catch` untuk menangkap dan menangani error",
            d: "`try` untuk menangkap nilai, `catch` untuk mengubah nilai"
        },
        correctAnswer: "c",
        explanation: "Try digunakan untuk menjalankan kode yang mungkin error, dan catch digunakan untuk menangkap dan menangani error tersebut."
    },
    {
        question: "Apa yang dimaksud dengan \"self-describing\" dalam konteks JSON?",
        answers: {
            a: "Data JSON mudah dimodifikasi",
            b: "Data JSON mudah dibaca dan dipahami",
            c: "Data JSON hanya bisa digunakan di JavaScript",
            d: "Data JSON tidak bisa diubah"
        },
        correctAnswer: "b",
        explanation: "JSON disebut \"self-describing\" karena data JSON mudah dibaca dan dipahami."
    },
    {
        question: "Bagaimana cara mengimpor modul dalam JavaScript?",
        answers: {
            a: "`export {moduleName} from 'file';`",
            b: "`require {moduleName} from 'file';`",
            c: "`import {moduleName} from 'file';`",
            d: "`load {moduleName} from 'file';`"
        },
        correctAnswer: "c",
        explanation: "Import digunakan untuk mengimpor modul dari file lain."
    },
    {
        question: "Apa yang terjadi jika Promise ditolak?",
        answers: {
            a: "Promise akan beralih ke status fulfilled",
            b: "Promise akan tetap di status pending",
            c: "Promise akan beralih ke status rejected",
            d: "Promise akan beralih ke status approved"
        },
        correctAnswer: "c",
        explanation: "Jika Promise ditolak, maka akan beralih ke status rejected."
    },
    {
        question: "Apa yang dimaksud dengan \"callback hell\"?",
        answers: {
            a: "Situasi di mana callback terlalu banyak bersarang sehingga sulit dibaca dan dipelihara",
            b: "Callback yang menyebabkan error",
            c: "Callback yang berjalan terlalu lambat",
            d: "Callback yang hanya berjalan sekali"
        },
        correctAnswer: "a",
        explanation: "Callback hell adalah situasi di mana callback terlalu banyak bersarang sehingga sulit dibaca dan dipelihara."
    },
    {
        question: "Mengapa menggunakan `finally()` dalam Promise?",
        answers: {
            a: "Untuk menangani kasus yang gagal",
            b: "Untuk menjalankan kode setelah Promise selesai, baik berhasil maupun gagal",
            c: "Untuk mengubah status Promise",
            d: "Untuk menghentikan eksekusi Promise"
        },
        correctAnswer: "b",
        explanation: "Finally digunakan untuk menjalankan kode setelah Promise selesai, baik berhasil maupun gagal."
    },
    {
        question: "Apa yang dimaksud dengan `throw` dalam JavaScript?",
        answers: {
            a: "Menghentikan eksekusi kode",
            b: "Menghasilkan custom error",
            c: "Mengabaikan error",
            d: "Menghapus error"
        },
        correctAnswer: "b",
        explanation: "Throw digunakan untuk menghasilkan custom error."
    },
    {
        question: "Bagaimana cara membuat Promise dalam JavaScript?",
        answers: {
            a: "`Promise.new(function(resolve, reject) {...});`",
            b: "`new.Promise(function(resolve, reject) {...});`",
            c: "`new Promise(function(resolve, reject) {...});`",
            d: "`Promise.create(function(resolve, reject) {...});`"
        },
        correctAnswer: "c",
        explanation: "Promise dibuat dengan menggunakan `new Promise(function(resolve, reject) {...});`"
    },
    {
        question: "Apa hasil dari eksekusi kode berikut?",
        questionCode: `
console.log("Task 1");
setTimeout(() => console.log("Task 2"), 3000);
console.log("Task 3");
        `,
        answers: {
            a: "Task 1, Task 2, Task 3",
            b: "Task 1, Task 3, Task 2",
            c: "Task 3, Task 1, Task 2",
            d: "Task 2, Task 1, Task 3"
        },
        correctAnswer: "b",
        explanation: "Karena setTimeout bersifat asinkron, maka Task 3 akan dijalankan sebelum Task 2."
    },
    {
        question: "Apa yang dimaksud dengan `tryPromise()` dalam contoh async/await?",
        answers: {
            a: "Fungsi yang mengembalikan nilai Promise",
            b: "Fungsi yang menghentikan eksekusi Promise",
            c: "Fungsi yang menghapus nilai Promise",
            d: "Fungsi yang menunda eksekusi Promise"
        },
        correctAnswer: "a",
        explanation: "tryPromise adalah fungsi yang mengembalikan nilai Promise."
    },
    {
        question: "Apa yang dilakukan `JSON.stringify()` dalam JavaScript?",
        answers: {
            a: "Mengubah objek JavaScript menjadi string JSON",
            b: "Mengubah string JSON menjadi objek JavaScript",
            c: "Menghapus elemen dari DOM",
            d: "Menambah elemen ke DOM"
        },
        correctAnswer: "a",
        explanation: "JSON.stringify() digunakan untuk mengubah objek JavaScript menjadi string JSON."
    },
    {
        question: "Bagaimana cara menggunakan `try` dan `catch` untuk menangani error?",
        answers: {
            a: "`try` untuk mendefinisikan error, `catch` untuk menangkap error",
            b: "`try` untuk menangkap error, `catch` untuk mendefinisikan error",
            c: "`try` untuk menjalankan kode yang mungkin error, `catch` untuk menangkap dan menangani error",
            d: "`try` untuk menangkap nilai, `catch` untuk mengubah nilai"
        },
        correctAnswer: "c",
        explanation: "Try digunakan untuk menjalankan kode yang mungkin error, dan catch digunakan untuk menangkap dan menangani error tersebut."
    },
    {
        question: "Mengapa menggunakan modul dalam JavaScript?",
        answers: {
            a: "Untuk mengurangi ukuran file",
            b: "Untuk meningkatkan performa aplikasi",
            c: "Untuk memudahkan pemeliharaan kode dengan memisahkan file",
            d: "Untuk meningkatkan keamanan kode"
        },
        correctAnswer: "c",
        explanation: "Modul memudahkan pemeliharaan kode dengan memisahkan file, membuat kode lebih terorganisir dan mudah dipahami."
    },
    {
        question: "Apa yang dimaksud dengan `export` dalam JavaScript?",
        answers: {
            a: "Untuk mengimpor modul dari file lain",
            b: "Untuk menghapus modul",
            c: "Untuk mendeklarasikan variabel global",
            d: "Untuk mengekspor fungsi atau variabel dari file"
        },
        correctAnswer: "d",
        explanation: "Export digunakan untuk mengekspor fungsi atau variabel dari file sehingga bisa diimpor di file lain."
    },
    {
        question: "Apa peran `finally()` dalam Promise?",
        answers: {
            a: "Untuk menangani kasus yang gagal",
            b: "Untuk menjalankan kode setelah Promise selesai, baik berhasil maupun gagal",
            c: "Untuk mengubah status Promise",
            d: "Untuk menghentikan eksekusi Promise"
        },
        correctAnswer: "b",
        explanation: "Finally digunakan untuk menjalankan kode setelah Promise selesai, baik berhasil maupun gagal."
    },
    {
        question: "Apa yang terjadi jika `await` digunakan di luar fungsi `async`?",
        answers: {
            a: "Tidak ada yang terjadi",
            b: "Akan mengembalikan nilai yang sama",
            c: "Akan menyebabkan error",
            d: "Fungsi tetap berjalan seperti biasa"
        },
        correctAnswer: "c",
        explanation: "Await hanya bisa digunakan di dalam fungsi async. Jika digunakan di luar, akan menyebabkan error."
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];
    
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        
        output.push(
            `<div class="question">
                <h3>${questionNumber + 1}. ${currentQuestion.question}</h3>
                ${currentQuestion.questionCode ? `<pre>${currentQuestion.questionCode}</pre>` : ''}
                <div class="answers">${answers.join('')}</div>
                <div id="explanation${questionNumber}" class="explanation"></div>
            </div>`
        );
    });
    
    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;
    
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        const explanationContainer = document.getElementById(`explanation${questionNumber}`);
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            explanationContainer.innerHTML = `Jawaban benar. ${currentQuestion.explanation}`;
            explanationContainer.className = "explanation correct-answer";
        } else {
            explanationContainer.innerHTML = `Jawaban salah. ${currentQuestion.explanation}`;
            explanationContainer.className = "explanation incorrect-answer";
        }
    });
    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Kamu mendapatkan ${score} dari ${questions.length} soal yang benar.`;
}

document.addEventListener('DOMContentLoaded', () => {
    buildQuiz();
});
