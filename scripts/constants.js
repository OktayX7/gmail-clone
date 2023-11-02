// Fixed data that is used in the application

// Nav Categories Data
export const navCategories = [
  {
    id: 1,
    title: "Gelen Kutusu",
    icon: "bi-inbox",
  },
  {
    id: 2,
    title: "Yıldızlı",
    icon: "bi-star",
  },
  {
    id: 3,
    title: "Zamanlı",
    icon: "bi-clock",
  },
  {
    id: 4,
    title: "Gönderiler",
    icon: "bi-arrow-right-circle",
  },
  {
    id: 5,
    title: "Taslaklar",
    icon: "bi-file-earmark",
  },
  {
    id: 6,
    title: "Daha Fazla",
    icon: "bi-arrow-down",
  },
];

// Mail Data
const mailData = [
  {
    id: 1,
    sender: "HepsiBurada",
    receiver: "Oktay",
    title: "Hepsiburada siparişiniz hakkinda",
    message: "verdiğiniz sipariş teslim edilmiştir.",
    date: "13 Mayıs 2023",

    starred: false,
    checked: false,
  },
  {
    id: 2,
    sender: "Gmail",
    receiver: "Oktay",
    title: "Gmail'den önemli bir mesaj",
    message: "Önemli bir konu hakkında sizinle iletişime geçmek istiyoruz",
    date: "14 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 3,
    sender: "Facebook",
    receiver: "Oktay",
    title: "Yeni bildirim: Arkadaşlık isteği",
    message:
      "Birisi size arkadaşlık isteği gönderdi. Kabul etmek isterseniz profiline giderek isteği onaylayabilirsiniz",
    date: "15 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 4,
    sender: "Amazon",
    receiver: "Oktay",
    title: "Amazon Prime Üyeliğiniz Hakkında Bilgilendirme",
    message:
      "Prime üyeliğinizin yenileme tarihi yaklaşıyor. Son gün kaçırılmayacak fırsatları yakalamak için üyeliğinizi yenileyebilirsiniz.",
    date: "16 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 5,
    sender: "LinkedIn",
    receiver: "Oktay",
    title: "LinkedIn'den yeni mesaj",
    message:
      "Bir LinkedIn bağlantınız size mesaj gönderdi. Gelen kutunuzu kontrol etmeyi unutmayın.",
    date: "17 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 6,
    sender: "Twitter",
    receiver: "Oktay",
    title: "Yeni tweet bildirimi",
    message:
      "Takip ettiğiniz bir kişi yeni bir tweet paylaştı. Merak ettiğiniz konular hakkında güncel bilgilere ulaşabilirsiniz.",
    date: "18 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 7,
    sender: "Netflix",
    receiver: "Oktay",
    title: "Yeni İçerik: Favori Dizinizin Yeni Sezonu",
    message:
      "Favori dizinizin yeni sezonu yayınlandı! Hemen izlemeye başlayabilirsiniz.",
    date: "19 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 8,
    sender: "Bank",
    receiver: "Oktay",
    title: "Hesap Bakiyeniz: Güncel Bilgilendirme",
    message:
      "Hesabınızdaki bakiye güncellendi. Son işlemleri kontrol etmek ve hesabınızla ilgili önemli bilgileri görmek için hesap panelinizi ziyaret edin.",
    date: "20 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 9,
    sender: "Instagram",
    receiver: "Oktay",
    title: "Bildirim: Yeni Takipçi",
    message:
      "Yeni biri sizi takip etmeye başladı. Profilinizi ziyaret ederek bu kişiyle iletişim kurabilirsiniz.",
    date: "21 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 10,
    sender: "Spotify",
    receiver: "Oktay",
    title: "Özel Teklif: Premium Üyelik",
    message:
      "Spotify Premium üyeliği için size özel bir teklifimiz var. Sınırsız müzik keyfi için hemen üyeliğinizi güncelleyin.",
    date: "22 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 11,
    sender: "DHL",
    receiver: "Oktay",
    title: "Kargo Teslimat Bildirimi",
    message:
      "Kargonuz yola çıktı ve yakında teslim edilecek. Siparişinizi takip etmek için kargo takip numarasını kullanabilirsiniz.",
    date: "23 Mayıs 2023",
    starred: false,
    checked: false,
  },
  {
    id: 12,
    sender: "Airbnb",
    receiver: "Oktay",
    title: "Yeni İlan: Tatil İçin Harika Bir Seçenek",
    message:
      "Yeni bir tatil evi ilanımızı keşfedin! Harika konum ve olanaklara sahip bu tatil evi için hemen rezervasyon yapın.",
    date: "24 Mayıs 2023",
    starred: false,
    checked: false,
  },
];

const getLocalStorageMailData = JSON.parse(localStorage.getItem("mailData"));

export const newMailData = getLocalStorageMailData
  ? getLocalStorageMailData
  : mailData;

//türkçe aylar
export const month_tr = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
