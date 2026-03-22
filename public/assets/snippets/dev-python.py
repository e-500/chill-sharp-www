from chillsharp_py_client import ChillSharpClient

client = ChillSharpClient(
    "http://localhost:5000/api/chill",
    culture_name="en-GB",
)

schema = client.get_schema("Model.Sample", "research")

saved_sample = client.create({
    "ChillType": "Model.Sample",
    "Guid": "00000000-0000-0000-0000-000000000001",
    "Properties": {
        "StudyCode": "RS-2026-001",
        "Technician": "Dr. Ada Lovelace",
        "Result": "Consistent and validated",
    },
})

rows = client.query({
    "ChillType": "Query.SampleQuery",
    "ResultProperties": [
        {"Name": "StudyCode"},
        {"Name": "Technician"},
        {"Name": "Result"},
    ],
})
