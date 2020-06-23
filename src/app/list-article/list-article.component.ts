import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  fullArticleList: Article[] = [
    {
      title: 'Tinh tế radio 22/6: Trên tay Mi Note 10 Lite; Những lối phạt xe máy thường gặp, Đừng bỏ lỡ game nhá!',
      image: 'https://imgproxy3.cdnforo.com/o7r74GOTWYhLh3svrnoLcD0pedt2wiVhBhZXR41lvo8/h:460/plain/http://data.tinhte.vn/data/attachment-files/2020/06/5054955_Cover_radio-22.6.jpg',
      content: 'Mời anh em nghe radio tổng hợp sáng nay: Link các bài viết: Anh em có quan sát nhật thực sáng nay không? Trên tay Xiaomi Mi Note 10 Lite: dưới 10 triệu nhưng nếm ngửi nhiều đặc điểm flagship Tra…'
    },

    {
      title: 'Danh sách các đời iphone được lên os 14',
      image: 'https://imgproxy3.cdnforo.com/o7r74GOTWYhLh3svrnoLcD0pedt2wiVhBhZXR41lvo8/h:460/plain/http://data.tinhte.vn/data/attachment-files/2020/06/5054955_Cover_radio-22.6.jpg',
      content: 'Mời anh em nghe radio tổng hợp sáng nay: Link các bài viết: Anh em có quan sát nhật thực sáng nay không? Trên tay Xiaomi Mi Note 10 Lite: dưới 10 triệu nhưng nếm ngửi nhiều đặc điểm flagship Tra…'
    },

    {
      title: 'Mình vừa tham dự chạy trail 21km Đà Lạt',
      image: 'https://imgproxy3.cdnforo.com/o7r74GOTWYhLh3svrnoLcD0pedt2wiVhBhZXR41lvo8/h:460/plain/http://data.tinhte.vn/data/attachment-files/2020/06/5054955_Cover_radio-22.6.jpg',
      content: 'Mời anh em nghe radio tổng hợp sáng nay: Link các bài viết: Anh em có quan sát nhật thực sáng nay không? Trên tay Xiaomi Mi Note 10 Lite: dưới 10 triệu nhưng nếm ngửi nhiều đặc điểm flagship Tra…'
    },

    {
      title: 'Đánh giá The Space - chiếc màn hình mình thích nhất của Samsung',
      image: 'https://imgproxy3.cdnforo.com/o7r74GOTWYhLh3svrnoLcD0pedt2wiVhBhZXR41lvo8/h:460/plain/http://data.tinhte.vn/data/attachment-files/2020/06/5054955_Cover_radio-22.6.jpg',
      content: 'Mời anh em nghe radio tổng hợp sáng nay: Link các bài viết: Anh em có quan sát nhật thực sáng nay không? Trên tay Xiaomi Mi Note 10 Lite: dưới 10 triệu nhưng nếm ngửi nhiều đặc điểm flagship Tra…'
    },
  ];

  filterArticles: Article[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.filterArticles = this.fullArticleList;
       this.searchService.searchInput.subscribe((keywords) => {
         this.filterArticles = this.fullArticleList.filter((item) =>
           item.title.toLowerCase().includes(keywords.toLowerCase())
         );
       });
  }
}
