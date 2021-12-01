{
    let cardPK = 8987316;
    let doorPK = 14681524;

    function transform(value, subjectNumber) {
        value *= subjectNumber;
        value %= 20201227;
        return value;
    }

    function getLoopSize(pk, subject) {
        let i = 0;
        let v = 1;
        while ((v = transform(v, subject)) !== pk) { i+=1; }
        return i+1;
    }

    function getEncryptionKey(pk, sz) {
        let v = 1;
        for (let i=0; i<sz;i++) {
            v = transform(v, pk);
        }
        return v;
    }

    let cardLoop = getLoopSize(cardPK, 7);
    let doorLoop = getLoopSize(doorPK, 7);

    console.log(`Card loop count == ${cardLoop}`);
    console.log(`Door loop count == ${doorLoop}`);

    let encryptionKey = getEncryptionKey(cardPK, doorLoop);

    console.log(`Encryption key == ${encryptionKey}`);

    //test:
    //console.log(`test:  ${getLoopSize(5764801, 7)}`)
    //console.log(`test:  ${getEncryptionKey(17807724, 8)}`);
}