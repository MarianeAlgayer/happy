const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    // insert data into table
    await saveOrphanage(db, {
        lat: "-27.5849641",
        lng: "-48.5421251",
        name: "Casa Esperança",
        about: "Lar das Crianças provides care to children from 6 to 15 years old who are at risk and/or socially vulnerable.",
        whatsapp: "4898567232",
        images: [
            "/images/kids1.jpg",
            "/images/kids2.jpg",
            "/images/kids3.jpg",
            "/images/kids4.jpg",
            "/images/kids5.jpg",
            "/images/kids6.jpg"
        ].toString(),
        instructions: "Bring with you kindness, patiance and lots of love.",
        opening_hours: "Visiting hours are between 8 a.m and 6 p.m.",
        open_on_weekends: "0"
    })

    // querying data from table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // query only 1 orphanage by ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // delete data from table
    await db.run('DELETE FROM orphanages WHERE id = "4"')
})