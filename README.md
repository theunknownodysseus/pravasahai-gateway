
# Pravasahai Patients API Documentation

**Base URL:**  
https://pravasahai-gateway.onrender.com/api/patients

**Content-Type:**  
All requests with a body must include:  
\`\`\`
Content-Type: application/json
\`\`\`

## 1️⃣ GET All Patients

**Endpoint:** GET /api/patients

**Description:** Fetches a list of all patients in the database.

**Example cURL:**
\`\`\`bash
curl https://pravasahai-gateway.onrender.com/api/patients
\`\`\`

**Response Example:**
\`\`\`json
[
  {
    "_id": "64xxxxxx...",
    "patient_id": "KL00000001",
    "name": "Mocambo Khush Hua",
    "age": 20,
    "gender": "Female",
    "district": "Thiruvananthapuram",
    "is_migrant": true,
    "created_at": "2025-09-25T12:34:56.789Z"
  }
]
\`\`\`

## 2️⃣ GET a Single Patient

**Endpoint:** GET /api/patients/:patient_id

**Example cURL:**
\`\`\`bash
curl https://pravasahai-gateway.onrender.com/api/patients/KL00000001
\`\`\`

**Response Example:**
\`\`\`json
{
  "_id": "64xxxxxx...",
  "patient_id": "KL00000001",
  "name": "Mocambo Khush Hua",
  "age": 20,
  "gender": "Female",
  "district": "Thiruvananthapuram",
  "is_migrant": true,
  "created_at": "2025-09-25T12:34:56.789Z"
}
\`\`\`

**Error Response if Not Found:**
\`\`\`json
{ "error": "Patient not found" }
\`\`\`

## 3️⃣ CREATE a New Patient

**Endpoint:** POST /api/patients

**Example cURL:**
\`\`\`bash
curl -X POST https://pravasahai-gateway.onrender.com/api/patients -H "Content-Type: application/json" -d '{
  "patient_id": "KL99999999",
  "name": "Test Patient",
  "age": 30,
  "gender": "Male",
  "district": "Kollam",
  "is_migrant": false
}'
\`\`\`

**Response Example:**
\`\`\`json
{
  "_id": "64yyyyyy...",
  "patient_id": "KL99999999",
  "name": "Test Patient",
  "age": 30,
  "gender": "Male",
  "district": "Kollam",
  "is_migrant": false,
  "created_at": "2025-09-25T13:45:01.123Z"
}
\`\`\`

## 4️⃣ UPDATE a Patient

**Endpoint:** PUT /api/patients/:patient_id

**Example cURL:**
\`\`\`bash
curl -X PUT https://pravasahai-gateway.onrender.com/api/patients/KL99999999 -H "Content-Type: application/json" -d '{"age":31,"district":"Pathanamthitta"}'
\`\`\`

**Response Example:**
\`\`\`json
{
  "_id": "64yyyyyy...",
  "patient_id": "KL99999999",
  "name": "Test Patient",
  "age": 31,
  "gender": "Male",
  "district": "Pathanamthitta",
  "is_migrant": false,
  "created_at": "2025-09-25T13:45:01.123Z"
}
\`\`\`

**Error Response if Not Found:**
\`\`\`json
{ "error": "Patient not found" }
\`\`\`

## 5️⃣ DELETE a Patient

**Endpoint:** DELETE /api/patients/:patient_id

**Example cURL:**
\`\`\`bash
curl -X DELETE https://pravasahai-gateway.onrender.com/api/patients/KL99999999
\`\`\`

**Response Example:**
\`\`\`json
{ "message": "Deleted successfully" }
\`\`\`

**Error Response if Not Found:**
\`\`\`json
{ "error": "Patient not found" }
\`\`\`

## Notes

- All requests with a body (`POST`, `PUT`) must include:
\`\`\`
-H "Content-Type: application/json"
\`\`\`
- `patient_id` is unique. Duplicate inserts will fail.  
- Use GET /api/patients to verify the database contents.  
