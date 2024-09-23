export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome', 
      compliment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Studying new concepts, we often encounter interesting challenges. 
                  Hard work and perseverance help in reaching new heights. 
                  Progress always comes with difficulties, but the right approach allows us to overcome any obstacles. 
                  It's essential to stay motivated and focused on the goal`
    },
    nl: {
      welcome: 'Groetjes', 
      compliment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Terwijl we nieuwe concepten bestuderen, komen we vaak interessante uitdagingen tegen.
                   Hard werken en doorzettingsvermogen helpen ons om nieuwe hoogten te bereiken. 
                   Vooruitgang gaat altijd gepaard met moeilijkheden, maar de juiste aanpak stelt ons in staat om elke hindernis te overwinnen. 
                   Het is belangrijk om gemotiveerd en gefocust te blijven op het doel`
    },
    ua: {
      welcome: 'Вітання', 
      compliment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Вивчаючи нові концепції, ми часто зустрічаємося з цікавими викликами. 
                    Старання та наполегливість допомагають досягати нових вершин. 
                    Прогрес завжди йде рука об руку з труднощами, але правильний підхід дозволяє подолати будь-які перешкоди. 
                    Важливо залишатися мотивованим та зосередженим на меті.`
    }
  }
}))