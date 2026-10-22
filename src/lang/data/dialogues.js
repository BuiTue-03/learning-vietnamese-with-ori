/**
 * Short dialogues. Each line is [speaker, Vietnamese, English].
 * Audio names are positional (d1-01.mp3, d1-02.mp3, ...): only ever APPEND lines to the end of a dialogue.
 */
export const DIALOGUES = [
  { id: "d1", title: "Chào hỏi", sub: "Meeting someone", roles: { A: "Wei Jun", B: "Gia Tuệ" },
    lines: [
      ["A", "Xin chào! Bạn khỏe không?", "Hello! How are you?"],
      ["B", "Tôi khỏe, cảm ơn. Còn bạn?", "I’m well, thanks. And you?"],
      ["A", "Tôi cũng khỏe. Rất vui được gặp bạn.", "I’m well too. Nice to meet you."],
      ["B", "Tôi cũng rất vui. Bạn tên là gì?", "Me too. What’s your name?"],
      ["A", "Tôi tên là Wei Jun. Còn bạn?", "My name is Wei Jun. And you?"],
      ["B", "Tôi tên là Gia Tuệ. Hẹn gặp lại!", "I’m Gia Tuệ. See you again!"]
    ] },
  { id: "d2", title: "Gọi món", sub: "Ordering at a restaurant", roles: { A: "Hùng (waiter)", B: "Wei Jun (customer)" },
    lines: [
      ["A", "Chào anh, anh dùng gì ạ?", "Hello, what would you like?"],
      ["B", "Cho tôi một bát phở bò, không cay.", "A bowl of beef phở, not spicy, please."],
      ["A", "Anh uống gì ạ?", "What would you like to drink?"],
      ["B", "Cho tôi một cốc nước lọc, không đá.", "A glass of plain water, no ice, please."],
      ["A", "Vâng ạ. Anh chờ một chút.", "Certainly. Please wait a moment."],
      ["B", "Ngon quá! Tính tiền giúp tôi.", "So good! Please bring the bill."],
      ["A", "Tất cả là bảy mươi nghìn đồng ạ.", "The total is 70,000 đồng."]
    ] },
  { id: "d3", title: "Bắt xe", sub: "Taking a taxi", roles: { A: "Long (driver)", B: "Wei Jun (passenger)" },
    lines: [
      ["A", "Xin chào. Anh đi đâu ạ?", "Hello. Where are you going?"],
      ["B", "Cho tôi đến sân bay.", "Take me to the airport."],
      ["A", "Vâng. Mất khoảng bốn mươi phút.", "Sure. It takes about forty minutes."],
      ["B", "Bao nhiêu tiền vậy?", "How much will it be?"],
      ["A", "Khoảng ba trăm nghìn đồng ạ.", "About 300,000 đồng."],
      ["B", "Dừng ở đây, làm ơn. Cảm ơn!", "Stop here, please. Thank you!"]
    ] },
  { id: "d4", title: "Học đường", sub: "Asking your teacher for help", roles: { A: "Wei Jun (student)", B: "Gia Tuệ (teacher)" },
    lines: [
      ["A", "Em chào cô ạ.", "Hello, teacher."],
      ["B", "Chào em. Hôm nay em thế nào?", "Hello. How are you today?"],
      ["A", "Em khỏe ạ. Cô ơi, em không hiểu bài này.", "I’m well. Teacher, I don’t understand this lesson."],
      ["B", "Không sao. Cô nói lại nhé.", "No problem. I’ll say it again."],
      ["A", "Cô nói chậm hơn được không ạ?", "Could you speak more slowly?"],
      ["B", "Được. Em hiểu chưa?", "Of course. Do you understand now?"],
      ["A", "Em hiểu rồi ạ. Em cảm ơn cô!", "I understand now. Thank you, teacher!"]
    ] },
  { id: "d5", title: "Công sở", sub: "Asking a colleague about a meeting", roles: { A: "Wei Jun", B: "Hải (colleague)" },
    lines: [
      ["A", "Chào anh. Anh có bận không ạ?", "Hello. Are you busy?"],
      ["B", "Chào em. Anh không bận. Có chuyện gì vậy?", "Hello. I’m not busy. What’s up?"],
      ["A", "Anh ơi, cuộc họp bắt đầu lúc mấy giờ ạ?", "When does the meeting start?"],
      ["B", "Cuộc họp bắt đầu lúc chín giờ.", "The meeting starts at nine o’clock."],
      ["A", "Cuộc họp ở phòng nào ạ?", "Which room is the meeting in?"],
      ["B", "Phòng họp số hai, tầng ba.", "Meeting room two, on the third floor."],
      ["A", "Vâng, em cảm ơn anh. Hẹn gặp anh lúc chín giờ!", "Thank you. See you at nine!"]
    ] },
  { id: "d6", title: "Đi chợ", sub: "Buying fruit at the market", roles: { A: "Hoa (seller)", B: "Gia Tuệ (customer)" },
    lines: [
      ["A", "Chào chị, chị mua gì ạ?", "Hello, what would you like to buy?"],
      ["B", "Xoài này bao nhiêu tiền một cân ạ?", "How much per kilo are these mangoes?"],
      ["A", "Bốn mươi nghìn một cân.", "Forty thousand đồng a kilo."],
      ["B", "Đắt quá! Bớt được không ạ?", "That’s expensive! Can you lower the price?"],
      ["A", "Được, ba mươi lăm nghìn nhé.", "All right, thirty-five thousand."],
      ["B", "Vâng, cho tôi hai cân.", "Okay, two kilos please."],
      ["A", "Tất cả bảy mươi nghìn ạ.", "That’s seventy thousand in total."]
    ] },
  { id: "d7", title: "Ở nhà thuốc", sub: "Asking a pharmacist for help", roles: { A: "Mai (pharmacist)", B: "Wei Jun (customer)" },
    lines: [
      ["A", "Chào anh, anh cần gì ạ?", "Hello, what do you need?"],
      ["B", "Tôi đau đầu và hơi sốt.", "I have a headache and a slight fever."],
      ["A", "Anh bị từ bao giờ ạ?", "Since when?"],
      ["B", "Từ tối qua.", "Since last night."],
      ["A", "Anh uống thuốc này, một ngày hai lần, sau khi ăn.", "Take this medicine, twice a day, after eating."],
      ["B", "Tôi bị dị ứng với kháng sinh. Thuốc này có kháng sinh không?", "I’m allergic to antibiotics. Does this medicine contain any?"],
      ["A", "Không có ạ. Nếu chưa đỡ, anh nên đi khám bác sĩ.", "No. If you don’t feel better, you should see a doctor."],
      ["B", "Vâng, cảm ơn chị.", "Yes, thank you."]
    ] },
  { id: "d8", title: "Nhận phòng", sub: "Checking in at a hotel", roles: { A: "Linh (receptionist)", B: "Wei Jun (guest)" },
    lines: [
      ["A", "Chào anh. Anh đã đặt phòng chưa ạ?", "Hello. Have you booked a room?"],
      ["B", "Rồi ạ. Tôi tên là Wei Jun.", "Yes. My name is Wei Jun."],
      ["A", "Vâng. Anh cho tôi xem hộ chiếu nhé.", "Thank you. May I see your passport?"],
      ["B", "Đây ạ. Phòng có điều hòa không?", "Here you are. Does the room have air conditioning?"],
      ["A", "Có ạ. Phòng của anh ở tầng ba.", "Yes. Your room is on the third floor."],
      ["B", "Mật khẩu wifi là gì ạ?", "What is the wifi password?"],
      ["A", "Mật khẩu ở trên thẻ phòng ạ.", "The password is on your room card."],
      ["B", "Bữa sáng lúc mấy giờ ạ?", "What time is breakfast?"],
      ["A", "Từ bảy giờ đến chín giờ ạ.", "From seven to nine o’clock."]
    ] },
  { id: "d9", title: "Mua thẻ SIM", sub: "Buying a SIM card", roles: { A: "Trang (seller)", B: "Wei Jun (customer)" },
    lines: [
      ["A", "Chào anh, anh cần gì ạ?", "Hello, what do you need?"],
      ["B", "Tôi muốn mua thẻ SIM.", "I’d like to buy a SIM card."],
      ["A", "Anh ở Việt Nam bao lâu ạ?", "How long are you staying in Vietnam?"],
      ["B", "Tôi ở hai tuần.", "I’m staying two weeks."],
      ["A", "Gói này giá một trăm nghìn đồng, dùng được ba mươi ngày.", "This pack costs 100,000 đồng and lasts thirty days."],
      ["B", "Tôi trả bằng tiền mặt được không?", "Can I pay in cash?"],
      ["A", "Được ạ. Anh cho tôi xem hộ chiếu nhé.", "Of course. May I see your passport?"],
      ["B", "Đây ạ. Cảm ơn chị.", "Here you are. Thank you."]
    ] },
  { id: "d10", title: "Hẹn bạn", sub: "Making plans with a friend", roles: { A: "Wei Jun", B: "Gia Tuệ" },
    lines: [
      ["A", "Tuệ ơi, cuối tuần bạn có rảnh không?", "Tuệ, are you free at the weekend?"],
      ["B", "Có. Thứ bảy mình rảnh.", "Yes. I’m free on Saturday."],
      ["A", "Mình đi ăn bún chả nhé?", "Shall we go and eat bún chả?"],
      ["B", "Được! Mấy giờ?", "Great! What time?"],
      ["A", "Mười hai giờ rưỡi nhé.", "Half past twelve?"],
      ["B", "Ở đâu?", "Where?"],
      ["A", "Ở gần hồ Hoàn Kiếm.", "Near Hoàn Kiếm Lake."],
      ["B", "Tuyệt vời! Hẹn gặp lại bạn thứ bảy!", "Wonderful! See you on Saturday!"]
    ] },
  { id: "d11", title: "Làm quen", sub: "Meeting a new friend", roles: { A: "Wei Jun", B: "Lan" },
    lines: [
      ["A", "Chào bạn. Tôi là Wei Jun. Rất vui được làm quen.", "Hello. I’m Wei Jun. Nice to meet you."],
      ["B", "Chào Wei Jun. Mình là Lan. Bạn đến từ đâu?", "Hello, Wei Jun. I’m Lan. Where are you from?"],
      ["A", "Tôi đến từ Singapore. Đây là lần đầu tiên tôi đến Việt Nam.", "I’m from Singapore. This is my first time in Vietnam."],
      ["B", "Bạn làm nghề gì?", "What do you do?"],
      ["A", "Tôi là giáo viên. Còn bạn?", "I’m a teacher. And you?"],
      ["B", "Mình là kỹ sư. Bạn nói tiếng Việt giỏi quá!", "I’m an engineer. You speak Vietnamese so well!"],
      ["A", "Đâu có. Tôi nói được một chút thôi.", "Not really. I can only speak a little."],
      ["B", "Bạn ở Việt Nam bao lâu?", "How long are you staying in Vietnam?"],
      ["A", "Tôi ở hai tuần.", "Two weeks."]
    ] },
  { id: "d12", title: "Tham quan", sub: "Buying tickets at a sight", roles: { A: "Thu (ticket seller)", B: "Wei Jun (visitor)" },
    lines: [
      ["A", "Chào anh. Anh mua mấy vé ạ?", "Hello. How many tickets would you like?"],
      ["B", "Cho tôi hai vé. Vé bao nhiêu tiền?", "Two tickets, please. How much is a ticket?"],
      ["A", "Ba mươi nghìn đồng một vé ạ.", "Thirty thousand đồng per ticket."],
      ["B", "Ở đây chụp ảnh được không?", "Can I take photos here?"],
      ["A", "Được ạ. Nhưng trong nhà cấm chụp ảnh.", "Yes. But photos are not allowed indoors."],
      ["B", "Mấy giờ đóng cửa ạ?", "What time does it close?"],
      ["A", "Năm giờ chiều ạ.", "At five in the afternoon."],
      ["B", "Cảm ơn chị.", "Thank you."]
    ] },
  { id: "d13", title: "Mua quần áo", sub: "Trying on a T-shirt", roles: { A: "Phương (seller)", B: "Gia Tuệ (customer)" },
    lines: [
      ["A", "Chào chị. Chị muốn mua gì ạ?", "Hello. What would you like to buy?"],
      ["B", "Tôi muốn xem cái áo phông này. Có màu khác không?", "I’d like to look at this T-shirt. Do you have another colour?"],
      ["A", "Có ạ. Có màu trắng, màu đen và màu xanh.", "Yes. There’s white, black and blue."],
      ["B", "Cho tôi thử màu trắng. Phòng thử đồ ở đâu?", "I’ll try the white one. Where is the fitting room?"],
      ["A", "Ở đằng kia ạ.", "Over there."],
      ["B", "Cái này hơi rộng. Có cỡ nhỏ hơn không?", "This is a bit loose. Do you have a smaller size?"],
      ["A", "Có ạ. Cái này vừa không chị?", "Yes. Does this one fit?"],
      ["B", "Vừa rồi. Cái này bao nhiêu tiền?", "It fits. How much is this?"],
      ["A", "Một trăm năm mươi nghìn đồng ạ.", "One hundred and fifty thousand đồng."],
      ["B", "Đắt quá! Bớt được không?", "That’s expensive! Can you lower the price?"]
    ] }
];
