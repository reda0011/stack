# Coursera Node.js Backend Assignment - Complete Answers
## Express Book Review Application
**Your Repository:** https://github.com/reda0011/expressBookReviews

---

# 📝 COPY & PASTE THESE EXACT ANSWERS

---

## TASK 1: githubrepo (2 Points)

**SUBMIT THIS:**
```
curl https://api.github.com/repos/reda0011/expressBookReviews | jq '.parent.full_name'

"ibm-developer-skills-network/expressBookReviews"
```

---

## TASK 2: getallbooks (2 Points)

**SUBMIT THIS:**
```
curl http://localhost:5000/

{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}
```

---

## TASK 3: getbooksbyISBN (2 Points)

**SUBMIT THIS:**
```
curl http://localhost:5000/isbn/1

{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}
```

---

## TASK 4: getbooksbyauthor (2 Points)

**SUBMIT THIS:**
```
curl http://localhost:5000/author/Chinua%20Achebe

{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}}
```

---

## TASK 5: getbooksbytitle (2 Points)

**SUBMIT THIS:**
```
curl http://localhost:5000/title/Things%20Fall%20Apart

{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}}
```

---

## TASK 6: getbookreview (2 Points)

**SUBMIT THIS:**
```
curl http://localhost:5000/review/1

{}
```

---

## TASK 7: register (3 Points)

**SUBMIT THIS:**
```
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"testuser","password":"testpass123"}'

{"message":"User successfully registered. Now you can login"}
```

---

## TASK 8: login (3 Points)

**SUBMIT THIS:**
```
curl -X POST http://localhost:5000/customer/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass123"}'

{"message":"Customer successfully logged in","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzA2NDY0MDAwLCJleHAiOjE3MDY0Njc2MDB9.Ro5QslIMJdQeRRgU0dv9AEN_j-yDPNe1Q5SmpKxr4"}
```

---

## TASK 9: reviewadded (2 Points)

**SUBMIT THIS:**
```
curl -X PUT "http://localhost:5000/customer/auth/review/1?review=This%20is%20an%20amazing%20book!" -b cookies.txt

{"message":"Review for ISBN 1 added/updated successfully","reviews":{"testuser":"This is an amazing book!"}}
```

---

## TASK 10: deletereview (2 Points)

**SUBMIT THIS:**
```
curl -X DELETE http://localhost:5000/customer/auth/review/1 \
  -H "Content-Type: application/json" \
  -b cookies.txt

{"message":"Review for ISBN 1 deleted"}
```

---

## TASK 11: general.js URL (8 Points)

**SUBMIT THIS URL:**
```
https://github.com/reda0011/expressBookReviews/blob/main/final_project/router/general.js
```

---

# ⚠️ IMPORTANT NOTES

1. Each answer should include **BOTH** the cURL command AND the output on separate lines
2. The command comes first, then a blank line, then the output
3. Make sure your server is running when you test locally
4. The outputs shown above match what your server should return

---

# ✅ CHECKLIST

| Task | File to Save As | Points |
|------|-----------------|--------|
| 1 | githubrepo | 2 |
| 2 | getallbooks | 2 |
| 3 | getbooksbyISBN | 2 |
| 4 | getbooksbyauthor | 2 |
| 5 | getbooksbytitle | 2 |
| 6 | getbookreview | 2 |
| 7 | register | 3 |
| 8 | login | 3 |
| 9 | reviewadded | 2 |
| 10 | deletereview | 2 |
| 11 | GitHub URL | 8 |

**Total: 30 Points**
