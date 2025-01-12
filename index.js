var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function CreateQuestion(country) {
    var questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
    var card = document.createElement("div");
    card.classList.add("country");
    var countryName = country.name.common;
    var questionText = document.createElement("p");
    questionText.textContent = "Essa bandeira pertence a qual Pa\u00EDs?";
    var lineBreak1 = document.createElement("br");
    var flag = document.createElement("img");
    flag.src = country.flags.svg;
    flag.alt = countryName;
    var answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.placeholder = "Digite sua resposta";
    var lineBreak2 = document.createElement("br");
    var checkButton = document.createElement("button");
    checkButton.textContent = "Verificar Resposta";
    checkButton.addEventListener("click", function () {
        var userAnswer = answerInput.value.toLowerCase();
        if (userAnswer === countryName.toLowerCase()) {
            alert("Correto! 🎉");
        }
        else {
            alert("Incorreto! A resposta correta \u00E9 ".concat(countryName, ". \uD83D\uDE1E"));
        }
    });
    card.append(flag);
    document.querySelector("#countries").append(card);
    questionContainer.append(questionText, lineBreak1, answerInput, lineBreak2, checkButton);
    document.querySelector("#quiz").append(questionContainer);
}
function getCountry() {
    return __awaiter(this, void 0, void 0, function () {
        var response, countries, randowCountry, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://restcountries.com/v3.1/all")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    countries = _a.sent();
                    randowCountry = countries[Math.floor(Math.random() * countries.length)];
                    CreateQuestion(randowCountry);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Erro ao recuperar dados da API: ", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getCountry();
var btn = document.getElementById("nextcountry");
btn.addEventListener("click", function () {
    document.getElementById("countries").innerHTML = "";
    document.getElementById("quiz").innerHTML = "";
    getCountry();
});
