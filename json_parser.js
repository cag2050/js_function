let str = '{"linkDataArray": [{"from": -1, "fromPort": "R", "text": "转化率:109.95%", "to": -3, "points": [-619.9677047729492, -198.50000000000003, -609.9677047729492, -198.50000000000003, -588.9921836853027, -198.50000000000003, -588.9921836853027, -199.13333129882812, -568.0166625976562, -199.13333129882812, -558.0166625976562, -199.13333129882812], "toPort": "L"}, {"from": -1, "fromPort": "R", "text": "转化率:22.14%", "to": -5, "points": [-619.9677047729492, -198.50000000000003, -609.9677047729492, -198.50000000000003, -609.9677047729492, -198.50000000000003, -609.9677047729492, -148, -468.8999938964844, -148, -468.8999938964844, -139.36999340057372, -468.8999938964844, -129.36999340057372], "toPort": "T"}, {"from": -3, "fromPort": "R", "text": "转化率:79.24%", "to": -2, "points": [-387.7833251953125, -199.13333129882812, -377.7833251953125, -199.13333129882812, -246.0005149841309, -199.13333129882812, -246.0005149841309, -176.5000000000001, -114.21770477294928, -176.5000000000001, -104.21770477294928, -176.5000000000001], "toPort": "L"}, {"from": -5, "fromPort": "R", "text": "转化率:393.51%", "to": -2, "points": [-383.7833251953125, -89.14999389648436, -373.7833251953125, -89.14999389648436, -244.0005149841309, -89.14999389648436, -244.0005149841309, -176.5000000000001, -114.21770477294928, -176.5000000000001, -104.21770477294928, -176.5000000000001], "toPort": "L"}, {"from": -1, "fromPort": "R", "text": "转化率:", "to": -7, "points": [-619.9677047729493, -198.50000000000003, -609.9677047729493, -198.50000000000003, -585.7833251953125, -198.50000000000003, -585.7833251953125, -145.3249969482422, -585.7833251953125, -92.14999389648436, -595.7833251953125, -92.14999389648436], "toPort": "R"}, {"from": -7, "fromPort": "B", "text": "转化率:", "to": -6, "points": [-680.8999938964844, -51.929994392395, -680.8999938964844, -41.929994392395, -680.8999938964844, -44, -680.8999938964844, -44, -680.8999938964844, -36, -372, -36, -372, -110.14999389648438, -160.9499969482422, -110.14999389648438, -150.9499969482422, -110.14999389648438], "toPort": "L"}], "nodeDataArray": [{"category": "sdk", "text": "eventid=red_in_h5_show↵from=12↵PV:230956↵UV:156048", "key": -1, "loc": "-705.4843750000001 -198.50000000000003"}, {"category": "new", "text": "pcid=oppo_market↵pcid=vivo_market↵新增:179117", "key": -2, "loc": "-30.484375000000057 -176.50000000000009"}, {"category": "sdk", "text": "eventid=red_in_h5_click↵from=10↵btnFrom=0↵PV:775979↵UV:141929", "key": -3, "loc": "-472.8999938964844 -199.13333129882812"}, {"category": "sdk", "text": "eventid=red_in_h5_click↵from=0↵btnFrom=5↵PV:5488141↵UV:704836", "key": -5, "loc": "-468.8999938964844 -89.14999389648438"}, {"category": "new", "text": "pcid=meizu_market↵pcid=xiaomi_market↵新增:80100", "key": -6, "loc": "-71.89999389648438 -110.14999389648438"}, {"category": "sdk", "text": "eventid=red_in_h5_click↵from=0↵btnFrom=5", "key": -7, "loc": "-680.8999938964844 -92.14999389648438"}], "class": "go.GraphLinksModel", "linkToPortIdProperty": "toPort", "linkFromPortIdProperty": "fromPort"}'

console.log(JSON.parse(str))