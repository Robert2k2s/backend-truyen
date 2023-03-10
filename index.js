const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const listtruyen = [
  {
    id: 1,
    ten_truyen: "Bát Long Quy Nguyên Truyện",
    truyen: "BatLongQuyNguyenTruyen",
    tac_gia: "Hắc Tâm Lão Ma",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Yêu Thần Thế Giới! " +
      "Một thế giới rộng lớn vô biên! " +
      "Thế lực cường đại nơi đâu cũng có! " +
      "Yêu Thần Thế Giới xuất hiện một truyền thuyết! Thế gian này tồn tại tám miếng thần ngọc. " +
      "Tám miếng Thần Ngọc này còn được gọi là Bát Long Thần Ngọc!" +
      "Tương truyền! Chỉ cần có thể nắm trong tay tám miếng Thần Ngọc liền có thể thống được Yêu Thần Thế Giới, siêu thoát thiên địa. " +
      "Mấy trăm vạn năm qua, vì tranh đoạt tám miếng Thần Ngọc, Yêu Thần Thế Giới tranh đấu loạn lạc không ngừng. " +
      "Tu luyện giả lầm than vô số. " +
      "Thế nhưng đến hiện tại vẫn là không có người nào có thể nắm được tám miếng Thần Ngọc trong tay. " +
      "Trần Vân Thanh vốn là một người bình thường tại Địa Cầu! Hắn đến thế giới này chỉ vì muốn trở thành cường giả, quay trở lại Địa Cầu làm những chuyện vẫn còn đang dang dở. " +
      "Nhưng số phận lại kéo hắn đi vào cuộc tranh đoạt Bát Long Thần Ngọc. " +
      "Cũng từ đây xảy ra nhiều chuyện mà hắn cũng không thể nào tưởng tượng ra được. ",
    trang_thai: "Đang ra",
    Nguon: "Vtruyen",
    avatar: "https://static.cdnno.com/poster/yeu-than-luc/300.jpg?1662124396",
    gia: "5.000.000",
  },
  {
    id: 2,
    ten_truyen: "Đại Việt Chúa Tể",
    truyen: "DaiVietChuate",
    tac_gia: "Tiếu Ngạo Giang Hồ",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Sông núi nước Nam, vua Nam ở " +
      "Rành rành định phận ở sách trời... " +
      "Chỉ đơn giản là đã được định sẳn ở sách Trời thôi sao? " +
      "Vì sao chỉ có duy nhất sông núi nước Nam mới được sách Trời định sẵn, không ai được phép xâm phạm? " +
      "Vì sao trong lịch sử, bọn Khựa không bao giờ từ bỏ ý định đánh chiếm đất nước chúng ta? " +
      "Chẳng lẽ là bọn hắn chỉ đơn thuần muốn cướp tài nguyên thiên của nước mình về làm giàu cho nước bọn hắn thôi hay sao? Hay là còn một bí mật động trời khác mà chúng ta chưa từng được biết đến? " +
      "Vậy có một vết nhơ trong lịch sử nào của bọn chúng mà bọn chúng muốn che đậy, muốn cho đời sau của chúng ta không biết đến hay không? Hay là đằng sau đó còn có một bí mật vô cùng động trời gì khác hay sao? " +
      "Trần Nguyên, một sinh viên vô tình được viên châu đen bí ẩn giúp xuyên qua một thế giới cổ đại kỳ lạ sau một vụ tai nạn. " +
      "Từ đây hắn bắt đầu chinh phục lấy tất cả các nền văn minh khác, viết nên một trang sử hào hùng khác của Đại Việt ở thế giới mới này. " +
      "Truyện chỉ mang tính chất hư cấu, nên tất cả mọi sự kiện trong truyện đều hoàn toàn không đúng như trong đời thực. Truyện không cố ý xúc phạm đến chính trị, tôn giáo hay sắc tộc. Nếu có yếu tố gây hiểu lầm kính mong chư vị bỏ quá cho! ",
    trang_thai: "Đang ra",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/dai-viet-chua-te/300.jpg?1675943528",
    gia: "6.000.000",
  },
  {
    id: 3,
    ten_truyen: "Đấu Phá Thương Khung",
    truyen: "DauPhaThuongKhung",
    tac_gia: "Thiên Tàm Thổ Đậu",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Đấu Phá Thương Khung là một câu chuyện huyền huyễn đặc sắc kể về Tiêu Viêm, một thiên chi kiêu tử với thiên phú tu luyện mà ai ai cũng hâm mộ, bỗng một ngày người mẹ mất đi đễ lại di vật là một chiếc giới chỉ màu đen nhưng từ khi đó Tiêu Viêm đã mất đi thiên phú tu luyện của mình. " +
      "Từ thiên tài rớt xuống làm phế vật trong 3 năm, rồi bị vị hôn thê thẳng thừng từ hôn, làm dấy lên ý chí nam nhi của mình, Tiêu Viêm nhờ di vật của mẫu thân để lại là 1 chiếc hắc giới chỉ (nhẫn màu đen)Tiêu Viêm gặp được hồn của Dược Lão (Dược Trần – Dược tôn giả) 1 đại luyện dược tông sư của đấu khí đại lục… " +
      "Từ đó cuộc đời của Tiêu Viêm có những biến hóa gì? Gặp được các đại ngộ gì? Thân phận thật sự của Huân Nhi (thanh mai trúc mã lúc nhỏ của Tiêu Viêm) ra sao? Bí mật của gia tộc hắn là gì? Cùng theo dõi bộ truyện Đấu Phá Thương Khung để có thể giải đáp các thắc mắc này các bạn nhé! ",
    trang_thai: "Hoàn Thành",
    Nguon: "YY",
    avatar:
      "https://static.8cache.com/cover/o/eJzLyTDT1y1Mcw2M0C0IMAvL1g9z8nUxMYwyD3Tz1HeEgmwfR_0SAzefTKOgCI8MC_1yI0NT3QxjIyMANhQRaQ==/truyen-dau-pha-thuong-khung.jpg",
    gia: "15.000.000",
  },
  {
    id: 4,
    ten_truyen: "Ma Thần Thiên Quân",
    truyen: "MaThanThienQuan",
    tac_gia: "Đế Thanh",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Hắn.... sinh ra trong gia tộc nắm giữ một tinh cầu trong tinh không vô tận. " +
      "Hắn.... sinh ra trong một thế giới võ giả vi tôn, bách tộc tranh bá. Một ngày kia hắn muốn xưng bá tinh không. " +
      "Câu chuyện bắt đầu khi hắn thức tỉnh thông thiên nhãn, gia tộc bị hủy...hắn hóa thân ma tộc.... " +
      "Cùng theo dõi xem hắn làm sao báo thù cho gia tộc, làm sao xưng bá vũ trụ thành tựu Thiên Quân vô địch, hồng nhan bên người, chu du hồng trần.... " +
      "Cảnh giới phân chia: Khai Mạch, Tụ Nguyên, Nhân Đan, Địa Đan, Thiên Đan, Thông Thần, Thần Cấp....... " +
      "Tất cả nhân vật, sự kiện trong truyện hoàn toàn hư cấu, không phản ánh sự thật lịch sử. " +
      "******** Ta xin phép khuyến cáo một chút các bạn đang chuẩn bị nhảy hố do ta đào, đây là truyện do ta, Đế Thanh -Tác giả Việt Nam viết, không phải truyện conver từ truyện nào đó bên Trung Quốc! Có thể các bạn đọc vài trăm chương đầu tiên sẽ cảm thấy như đọc conver, điều này là lỗi của mình thời gian đầu lậm conver chứ không phải mình conver truyện ra. Bên cạnh đó còn có lỗi sai chính tả, tuy rằng hơi chút ích kỷ nhưng những chương đó ta sẽ không sửa lại, ta xem đó như là một phần kỷ niệm đẹp khi ta mới bắt đầu viết truyện! Mong mọi người thông cảm! ",
    trang_thai: "Đang ra",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/ma-than-thien-quan/300.jpg?1623149544",
    gia: "8.000.000",
  },
  {
    id: 5,
    ten_truyen: "Độc Tôn Tam Giới",
    truyen: "DocTonTamGioi",
    tac_gia: "Lê Thiên",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Thiên Đế Chi Tử Giang Trần chuyển sinh lên thân thể một thiếu niên bị chư hầu khi dễ bắt đầu trên con đường đuổi giết máu tanh dần dần đi lên. " +
      "Trước mặt Giang Trần ai dám xưng là thiên tài? Không ai có thể hiểu Thiên bằng Thiên Đế Chi Tử. " +
      "Thiên tài? Kẻ thuận ta là thiên, kẻ nghịch ta phải giết!! " +
      "Mạch truyện luôn bình thản nhưng không kém phần gay cấn, tình tiết logic xuyên suốt từ đầu đến cuối, các tình tiết đan xen lẫn nhau luôn được đẩy lên cao trào khiến độc giả bị cuốn vào mạch truyện. Đương nhiên vẫn như các bộ truyện khác kết thúc của Lê Thiên rất có hậu ",
    trang_thai: "Hoàn thành",
    Nguon: "YY",
    avatar:
      "https://static.8cache.com/cover/o/eJzLyTDW13UqDPHxS0sK13UN1A8zNCnPDTRzijT01HeEgoCgSP00b8PKtCKfYscIR2-n_Eo_D7PEqAzzsLCgZJMScyfd3EBn53z9ciNDU90MYyMjAHszGeU=/doc-ton-tam-gioi.jpg",
    gia: "15.500.000",
  },
  {
    id: 6,
    ten_truyen: "Linh Vũ Thiên Hạ",
    truyen: "LinhVuThienHa",
    tac_gia: "Vũ Phong",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Lục Thiếu Du, linh hồn bị xuyên qua đến thế giới khác, nhập vào thân thể của một thiếu gia không có địa vị phải trải qua cuộc sống không khác gì nô bộc. " +
      "Thế giới này lấy Vũ vi cường, lấy Linh vi tôn, nghe đồn khi võ đạo đỉnh phong, linh đạo đạt đến cực hạn có thể phá toái hư không. " +
      "Lục Thiếu Du mang theo ký ức từ kiếp trước tái sinh, không cam lòng làm một thiếu gia chẳng khác gì củi mục. " +
      "Trong thế giới xa lạ " +
      "Say - nằm trên gối mỹ nhân " +
      "Tỉnh - nắm quyền thiên hạ. " +
      "Đây mới là cuộc sống đáng mơ ước. " +
      "Linh - Vũ song tu " +
      "Bá chủ kiêu hùng " +
      "Đã đến, ta sẽ lưu lại một huyền thoại...... ",
    trang_thai: "Hoàn thành",
    Nguon: "Vip Văn Đàn",
    avatar:
      "https://static.8cache.com/cover/o/eJzLyTDW160wTC70dXI0zAnO1g9LL0gpsAz0CA_x1HeEAqckR31jj0A_n_Jg8ygXC_1yI0NT3QxjIyNdz2QTIwCuMBMz/linh-vu-thien-ha.jpg",
    gia: "20.000.000",
  },
  {
    id: 7,
    ten_truyen: "Thế Giới Hoàn Mỹ",
    truyen: "TheGioiHoanMy",
    tac_gia: "Thần Đông",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Dịch giả: Ronkute, Yencute, Ryuken, kukhoai, bokinhvan, Kensin_Kaoru, Big Bang, Luciferht, Độc Nhân " +
      "Một hạt bụi có thể lấp biển, " +
      "một cọng cỏ chém hết mặt trời mặt trăng và ngôi sao, " +
      "trong nháy mắt ở giữa long trời lỡ đất. " +
      "Quần hùng cùng nổi lên, " +
      "vạn tộc mọc lên san sát như rừng, " +
      "chư thánh tranh bá, loạn khắp đất trời. " +
      "Hỏi mặt đất bao la, cuộc đời thăng trầm? " +
      "Một thiếu niên theo trong đất hoang đi ra, " +
      "tất cả bắt đầu từ nơi này... ",
    trang_thai: "Hoàn thành",
    Nguon: "Vip Văn Đàn",
    avatar:
      "https://static.8cache.com/cover/o/eJzLyTDR100qKnJ08QhzLS0M1A_z8zUJcs0zsMz31HeEghwzA32PJCfTqky_MIOMcv1yI0NT3QxjIyMATdMSHQ==/the-gioi-hoan-my.jpg",
    gia: "16.000.000",
  },
  {
    id: 8,
    ten_truyen: "Tổng Tài Cuồng Vợ",
    truyen: "TongTaiCuongVo",
    tac_gia: "Thập Thất Mạch",
    the_loai: "Ngôn Tình",
    gioi_thieu:
      "Không cẩn thận bị cả gia đình cậu gài bẫy, cô bị đưa đến chỗ một lão già nào đó để làm cừu non thế thân thay cho em họ. " +
      'Nhưng lại không ngờ “lão già" trong truyền thuyết lại là một người trẻ tuổi, ' +
      "chân dài, đẹp trai, thân hình tráng kiện, lại còn là tỷ phú thế giới! Điều quan trọng nhất là, " +
      "anh thương cô đến tận xương tủy, vì cô mà không màng tất cả những thứ khác... ",
    trang_thai: "Hoàn thành",
    Nguon: "Sưu Tầm",
    avatar:
      "https://static.8cache.com/cover/eJwFwUsKgCAUAMATPUpLaNOiH30gFCrKdhWFoSi6SW_fjBJJtFzS87lk1Hl_DG3MdNVpx3DPg5olKljbiHWCsKZkOI14ua5tvB-Q3c--qY1P6gsWLlpRkqEaRidN_mFEQCQY_0DUH54=/tong-tai-cuong-vo.jpg",
    gia: "16.000.000",
  },
  {
    id: 9,
    ten_truyen: "Cô Vợ Tổng Giám Đốc Xinh Đẹp Của Tôi",
    truyen: "CoVoTongGiamDocXinhDepCuaToi",
    tac_gia: "Mai Can Thái Thiếu Bính",
    the_loai: "Ngôn Tình",
    gioi_thieu:
      "Truyện Cô Vợ Tổng Giám Đốc Xinh Đẹp Của Tôi của  Mai Can Thái Thiếu Bính kể về câu chuyện của một anh chàng tốt nghiệp thạc sỹ chuyên ngành quản lý marketting đại học Harvard, tinh thông tiếng Anh, " +
      "tiếng Pháp, tiếng Ý, tiếng Tây Ban Nha, tiếng Đức, tiếng Nhật thậm chí cả tiếng Việt Nam và Thái Lan…. Nhưng một điều trớ treo thay, anh lại đi bán thịt dê xiêng trên vỉa hè. " +
      "Nhân vật nữ chính là một cô gái rất nổi bật, cô là tổng giám đốc của Công ty Quốc Tế Ngọc Lôi – một trong những công ty hàng đầu thế giới. Ngoại hình xinh đẹp, rất tài giỏi. " +
      "Trớ trêu số phận đã đẩy đưa khiến hai người trở thành vợ chồng chỉ sau một đêm có những phút giây điên cuồng bên nhau! Và từ đó, câu chuyện của chúng ta bắt đầu…Liệu khoảng cách giữa họ qua lớn có thể đến được với nhau? " +
      "Còn những gì xung quanh chàng trai  luôn sống trong trả thù chém giết, mang gánh nặng của một vị Minh Vương? ",
    trang_thai: "Hoàn thành",
    Nguon: "Sưu Tầm",
    avatar:
      "https://static.8cache.com/cover/o/eJzLyTDV103OLajIDioJc7HI1w8LDjX2jAjyNyv21HeEgtzEdH1H39RU3yhHN_NQR_1yI0NT3QxjIyMAZaUSfA==/co-vo-tong-giam-doc-xinh-dep-cua-toi.jpg",
    gia: "16.000.000",
  },
  {
    id: 10,
    ten_truyen: "Đông Ly Trần Kiếp Diệt",
    truyen: "DongLyTranKiepDiet",
    tac_gia: "Bách Lý Trường An",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Núi La Sơn, mười năm có một đêm trăng tỏ." +
      "Biển Vô Lượng, trăm năm có một đợt thủy triều." +
      "Sương mù Thương Mang, ngàn năm có một lần lui tán." +
      "Mà ta cùng ngươi, vạn năm mới có thể gặp gỡ một lần." +
      "Thiếu nữ mặc váy trắng đứng giữa tế đàn, hướng hắn nở nụ cười yên nhiên Gặp lại! Điểu huynh" +
      "Khương Ly, một tên Chân Nhân cao thủ tuổi già thọ cạn, cáo lão hồi hương, bỗng nhiên tuyệt địa phùng sinh, từ đấy vang danh Tứ Hoang Nhất Hải." +
      "Võ lộ thênh thang không bờ bến, quay đầu chợt hiện bóng hồng nhan.",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/dong-ly-tran-kiep-diet/300.jpg?1625416425",
    gia: "16.000.000",
  },
  {
    id: 11,
    ten_truyen: "Ta Bán Hủ Tiếu Tại Dị Giới",
    truyen: "TaBanHuTieuTaiDiGioi",
    tac_gia: "Gấu Tung Tăng",
    the_loai: "Dị Giới",
    gioi_thieu:
      "Một ông chú hơn ba mươi tuổi, như bao thằng đàn ông ngoài ba mươi khác. Hắn ta có ba không: Không nhà, không tiền, không bạn gái. Từ nhỏ sống trong một khu ổ chuột, lớn lên trong thành thành phố xa hoa không thuộc về mình." +
      "Thế giới phát triển quá mức, khiến cho các xe bán hàng lưu động bắt buộc phải thay đổi từ xe chạy xăng dầu đổi thành xe điện. Ma Tùng Quân vét sạch của cải, bán luôn cả xe hủ tiếu theo hắn mười mấy năm để mua một con xe tải bán hàng lưu động." +
      "Bằng một cách thần kỳ nào đấy, hắn cập nhật phiên bản mới của hệ thống trên bảng máy tính trong xe. Và rồi hắn xuyên không đến một thế giới loạn lạc, nguy hiểm đầy sự phân tranh và lòng người thối nát. Hắn đi bán hủ tiếu để nuôi sống bản thân, không may bị kéo vào một đống rắc rối, nhưng hắn vẫn kiên định với nghề bán hủ tiếu, không hề có ý muốn tranh giành phân tranh với ai." +
      "Nhưng sự đời chẳng phải như mong ước. Hắn sở hữu được sức mạnh, hắn ý thức được rằng bản thân phải có trách nhiệm với chính sức mạnh mình đang có. Thế là hắn vừa bán hủ tiếu dạo, vừa đi hoàn thành trách nhiệm với bản thân.",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/di-ban-hu-tieu-tai-di-gioi/300.jpg?1662206489",
    gia: "16.000.000",
  },
  {
    id: 12,
    ten_truyen: "Toàn Chức Pháp Sư Dị Bản",
    truyen: "ToanChucPhapSuDiBan",
    tac_gia: "Phan Phan",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Toàn chức pháp sư nguyên tác kết thúc đối với mình và rất nhiều đạo hữu đam mê tác phẩm này là có chút luyến tiếc, cho nên Dị Bản được viết ra để tiếp tục cuộc hành trình vẫn còn đang dang dở của nhân vật chính." +
      "Lưu ý:" +
      "1. Truyện này mình viết cho cộng đồng TCPS, nếu không đọc chính truyện thì sẽ không cách nào hiểu được. Mọi người có thể tìm đọc - Toàn chức pháp sư (全职法师) nguyên tác trên google và tham gia group fb của cộng đồng (Toàn chức pháp sư Fan club) để thảo luận." +
      '2. Bởi vì cộng đồng TCPS đã quen với việc đọc hơn 3000 chương truyện convert trước đó, cho nên tác phẩm vẫn tiếp tục viết theo kiểu tương tự convert (Chủ yếu giữ lại Hán Việt và đại từ nhân xưng). Đây là tác giả chỉ viết cho fan TCPS đọc, cho anh em cùng đam mê đã đi với nhau một hành trình dài, không phải tất cả đối tượng yêu văn. Mình sẽ không trả lời những bạn luôn thích đặt câu hỏi: "Tại sao lại viết kiểu convert?", "Tại sao không viết thuần Việt?". . . bla bla.' +
      '3. Dị bản chương đầu tiên sẽ xuất phát từ chương 3073 bản convert (Tên chương "Màu trắng, vô tội" sửa lại thành "Màu đen, hay là màu trắng?") của nguyên tác.' +
      "4. Dị bản là phi lợi nhuận, những tâm huyết bên trong tác phẩm này đều là tác giả chia sẻ niềm đam mê với những fan cứng của toàn chức pháp sư." +
      "5. Các bạn nếu thấy hay chỉ cần bình luận, vote, tương tác nhiệt tình là đủ.",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/toan-chuc-phap-su-di-ban/300.jpg?1623558907",
    gia: "16.000.000",
  },
  {
    id: 13,
    ten_truyen: "Lý Triều Bá Đạo Phò Mã",
    truyen: "LytrieuBaDaoPhoMa",
    tac_gia: "Patrick Nguyen",
    the_loai: "Dã Sử",
    gioi_thieu:
      "Ngô Huy Tuấn xuyên không về một thời đại đầy hào hùng của dân tộc. Có phải thừa không khi mà thời này Việt tộc đày dãy nhân tài và không thua kém các nước lân bang." +
      "Có lẽ sự suất hiện của hắn là không quá cần thiết nhưng hắn lại là một cái nhân chứng sống để nhìn thấy những góc khuất mà lịch sử chưa từng được nhìn nhận mộc cách cẩn thận." +
      "Tất cả tình tiết, nhân vật trong truyện hoàn toàn là hư cấu. Không phản ánh bất cứ sự thật lịch sử nào. Nếu có giống nhau chỉ là trùng hợp." +
      "Truyện phù hợp lứa tuổi trên 18. Dưới mười tám chưa đủ nhận thức hành vi bản thân không đọc...",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/ly-trieu-ba-dao-pho-ma/300.jpg?1634546995",
    gia: "16.000.000 vnđ",
  },
  {
    id: 14,
    ten_truyen: "Đỉnh Luyện Thần Ma",
    truyen: "DinhLuyenThanMa",
    tac_gia: "Hắc Tâm Lão Ma",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Luyện Thần Đỉnh! Đỉnh luyện thiên địa vạn vật!" +
      "Diệp Tử Phàm! Một thanh niên thời hiện đại, cơ duyên được đến Luyện Thần Đỉnh!" +
      "Còn trùng sinh đến một thế giới lấy võ vi tôn dị giới Đại Lục!" +
      "Dựa vào cái này Luyện Thần Đỉnh, hắn có thể đi đến Đại Lục đỉnh phong?" +
      "Cảnh giới: Võ Mạch - Siêu Phàm - Chân Huyền - Pháp Thần - Thông Thần - Hóa Thần - Thánh Vương - Thánh Hoàng- Thánh Đế - Chân Thần..." +
      "Truyện main tiền kỳ sát phạt bá đạo, trung kỳ làm vú em nhiều hơn, còn hậu kỳ....",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/dinh-luyen-than-ma/300.jpg?1623723278",
    gia: "16.000.000",
  },
  {
    id: 15,
    ten_truyen: "Vạn Biến Hồn Đế",
    truyen: "VanBienHonDe",
    tac_gia: "Thập Vĩ Hồ",
    the_loai: "Võng Du",
    gioi_thieu:
      "Đây là truyện hậu cung ngựa giống , ai không thích thì rời đi sớm để đỡ đắng cay cho cả hai bên." +
      "Khí Hồn thế giới là một nơi mà khi con người ta sinh ra thì đã có được một món vũ khí , chúng ẩn nấp trong cơ thể đến khi nhân loại đạt được mười tuổi thì xuất hiện . Bản thể Khí Hồn có thể là bất cứ thứ gì , có thể là vũ khí lạnh , vũ khí nóng , thậm chí là những vật không hề có sức chiến đấu .Các Khí Hồn đều có một năng lực đó chính là hấp thu Yêu Hạch và Linh Hồn của yêu thú đã chết để biến chúng thành Hồn Ngọc , hấp thu Hồn Ngọc sẽ tăng sức mạnh cho Khí Hồn . Hồn Sư sau khi hoàn thành cấp độ tu luyện thấp nhất là Hồn Cảnh đạt được Thập Hồn Hội Tụ sẽ có khả năng Yêu Hóa . Càng hấp thụ nhiều yêu thú thì trạng thái Yêu Hóa sẽ càng trở nên mạnh mẽ." +
      "Từ chương 210 trở đi sẽ là cuộc chiến khốc liệt của toàn vũ trụ với một vũ trụ khác , khi đó những Hồn Giả sử dụng Khí Hồn là chính liệu có thể vượt qua được các tu luyện giả khác hay không . Mời các bạn cùng đón xem . Truyện này là Huyền Huyễn xen lẫn võng du , yếu tố võng du cũng chỉ xuất hiện từ 210 trở đi . Bạn nào đọc Thú Tu Thành Thần chắc không lạ , còn ai chưa đọc có lẽ sẽ không bỡ ngỡ . Nhưng tác cam đoan nó sẽ cực kỳ thú vị vì đã có tận 200 chương làm bố cục để dẫn tới sự kiện lớn." +
      "Nhân vật chính Thiên Tiếu sẽ phát triển từ từ , bắt đầu từ ngây thơ , thực dụng dần dần phát triển . Bất cứ thay đổi trong tâm lý nào cũng có lý do rõ ràng , không gượng ép . Thiên Tiếu là con nhà nghèo , mẹ mất sớm cha hắn về sau tái hôn nhưng không được bao lâu thì gặp tai nạn hy sinh . Cả nhà chỉ còn lại mẹ kế và con gái riêng của nàng , trong tình cảnh như thế thì phải làm sao để có thể chính thức bước vào con đường tu luyện . Trong thế giới cường giả có tất cả Thiên Tiếu liệu sẽ có thể thay đổi vận mệnh của mình." +
      "Cảnh giới : Hồn Cảnh - Hồn Sĩ - Hồn Sinh - Hồn Đồ - Hồn Sư - Hồn Vương - Hồn Hoàng - Hồn Tông - Hồn Tướng - Hồn Tôn - Hồn Đế - Hồn Thánh - Hồn Thần - Siêu Thoát - Siêu Phàm - Siêu Thần - Tái Tạo - Hư Vô - Loạn Tượng - Hồng Hoang - Viễn Cổ - Chấn Thiên - Thế Thần - Chuẩn Thần - Chân Thần - Vương Thần - Đế Thần.",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/ta-dao-ngoan-nhan/300.jpg?1652969797",
    gia: "16.000.000",
  },
  {
    id: 16,
    ten_truyen: "Gamer Xưng Bá Dị Giới",
    truyen: "GamerXungBaDiGioi",
    tac_gia: "Keima42",
    the_loai: "Đồng Nhân",
    gioi_thieu:
      "Phạm Thiên: Hệ thống ! Cho ta vài trăm viên Cửu Chuyển Kim Đan cắn chơi." +
      "Hệ thống: Có tiền thì quay lại." +
      "Phạm Thiên: Hệ thống ! Cho ta mấy chục cây thần binh đi đập người coi." +
      "Hệ thống: Có tiền thì quay lại." +
      "Phạm Thiên: Hệ thống ! Cho ta mấy trăm môn Thiên Cấp Võ Kỹ để ta đi đánh người nào." +
      "Hệ thống: Có tiền thì quay lại." +
      "Phạm Thiên: Hệ thống..." +
      "Hệ thống: Không có tiền không có nhân quyền, bản hệ thống là Pay To Win!" +
      "Bộ truyện thứ 2 của tác giả Katsuragi Keima, tác giả bộ The Gamer Hệ Thống. Bản tác giả đã hoàn thành 1 bộ truyện với hơn 2,4 triệu chữ (1010 chương), nhân phẩm đảm bảo, tuyệt đối không drop!" +
      "Cảnh giới trong truyện:" +
      "Võ Đồ cửu cấp." +
      "Hậu Thiên Tam Cảnh: Võ Sĩ, Võ Sư, Đại Võ Sư." +
      "Tiên Thiên Tam Cảnh: Võ Linh, Võ Vương, Võ Hoàng." +
      "Siêu Phàm Tam Cảnh: Võ Tông, Võ Tôn, Võ Đế." +
      "Thánh Cảnh: Võ Thánh... (còn update)",

    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/gamer-xung-ba-di-gioi/300.jpg?1623149607",
    gia: "16.000.000",
  },
  {
    id: 17,
    ten_truyen: "Huyền Lục",
    tac_gia: "Huyền Lục",
    the_loai: "Tiên Hiệp",
    gioi_thieu:
      "Huyền Đô Đại Lục, tu chân giới thịnh hành." +
      "Tu vi hóa ngược trở về thành phàm nhân. Nếm trải đủ đắng, cay, ngọt, bùi của nhân sinh." +
      "Ngươi có muốn tu luyện lại không? - Không." +
      "Tại sao? - Vì ta chết một lần rồi." +
      "Vậy sao ngươi lại tu? - Vì ta sợ chết." +
      "Một câu chuyện tu chân đan xen giữa sinh hoạt đời sống của phàm nhân liền bắt đầu từ đây." +
      "PS: Truyện thu phí từ chương 466 - 656 (250 kẹo), chương 657 trở đi (400 kẹo)." +
      "Lưu ý: Qua 170 chương đầu mới được tính là nhập môn. Và tất cả nhân vật, sự kiện trong truyện hoàn toàn hư cấu, không phản ánh sự thật lịch sử.",
    Nguon: "Vtruyen",
    avatar: "https://static.cdnno.com/poster/huyen-luc/300.jpg?1652019253",
    gia: "16.000.000",
  },
  {
    id: 18,
    ten_truyen: "Tận Thế Tái Sinh: Hi Vọng Cuối Cùng",
    truyen: "TanTheTaiSinhHiVongCuoiCung",
    tac_gia: "Tô Lưu Vân",
    the_loai: "Huyền Huyễn",
    gioi_thieu:
      "Khi một trò chơi trở thành hiện thực." +
      "Khi bóng tối chỉ còn là bóng tối." +
      "Khi tất cả đang chìm trong bóng tối." +
      "Một tia sáng của hi vọng của nhân loại đã được nhen nhóm." +
      "[ Câu chuyện bắt đầu từ 12 năm trước khi tận thế bắt đầu ]" +
      "Đôi lời gửi đến đọc giả:" +
      "Đây là một bộ truyện theo bối cảnh Mạt thế nguy cơ mà tác thấy có ít tác giả hướng đến." +
      "Theo bạn Mạt thế là gì?" +
      "Bộ truyện này sẽ diễn tả cho các bạn thấy nhiều khía cạnh khác nhau của cụm từ Mạt thế." +
      "Một số hình ảnh về thông tin nhân vật và địa điểm xuất hiện trong truyện:",
    Nguon: "Vtruyen",
    avatar:
      "https://static.cdnno.com/poster/tai-sinh-ngay-tan-the-bat-dau-bang-can-kiet-nguon-cung-cap/300.jpg?1660144282",
    gia: "16.000.000",
  },
];

const users = [
  {
    username: "admin",
    password: "123456",
  },
];

app.get("/api/truyen", (req, res) => {
  res.status(200).json(listtruyen);
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists." });
  }

  const newUser = {
    username,
    password,
  };

  users.push(newUser);

  return res.status(201).json({ message: "User created." });
});

app.post("/api/truyen", (req, res) => {
  const newTruyen = req.body;
  newTruyen.id = listtruyen.length + 1;
  listtruyen.push(newTruyen);
  res.json(listtruyen);
});

app.delete("/api/truyen/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = listtruyen.findIndex((truyen) => truyen.id === id);
  if (index !== -1) {
    listtruyen.splice(index, 1);
  }
  res.json(listtruyen);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
  res.send("server run ok");
});
