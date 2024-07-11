const students = [662110182, 662110183, 662110184, 662110185,
    662110186, 662110187, 662110188, 662110189, 662110190, 662110191,
    662110192, 662110193, 662110194, 662110195, 662110196, 662110197,
    662110198, 662110199, 662110200, 662110201, 662110202, 662110203,
    662110204, 662110205, 662110265];
    
    function GroupRandom(students, n) {
        let shuffled = students.sort(() => 0.5 - Math.random());
        let groups = [];
        for (let i = 0; i < students.length; i += n) {
            groups.push(shuffled.slice(i, i + n));
        }
    
        // แบ่งนักเรียนที่เหลือ
        let leftovers = groups.pop();
        for (let i = 0; leftovers.length; i = (i + 1) % groups.length) {
            groups[i].push(leftovers.shift());
        }
        return groups;
    }
    
    console.log(GroupRandom(students, 3));