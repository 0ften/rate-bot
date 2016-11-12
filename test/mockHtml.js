const mockHtml = `
<table >
  <thead class="phone-medium-font">
    <tr>
      <th class="print_width set-title-L-min-width-class noscript" rowspan="2">幣別</th>
      <th class="print_width rowSP_Ctrl_2_2_2 set-title-L-min-width-class hasscript " rowspan="2">幣別</th>
      <th class="print_hide rate-content-cash " colspan="2">現金匯率</th>
      <th class="hidden"></th>
      <th class="print_hide rate-content-sight  hidden-phone" colspan="2">即期匯率</th>
      <th class="hidden"></th>
      <th class="print_hide" rowspan="2">
        <span class=""><span>遠期匯率</span></span>
      </th>
      <th class="print_hide noscript" rowspan="2">歷史匯率</th>
      <th class="print_hide rowSP_Ctrl_2_2_2 hasscript " rowspan="2">歷史匯率</th>

      <th class="display_none_print_show print_width" colspan="2">現金匯率</th>
      <th class="hidden"></th>
      <th class="display_none_print_show print_width" colspan="2">即期匯率</th>
      <th class="hidden"></th>
    </tr>
    <tr>
      <th class="hidden"></th>
      <th class="rate-content-cash print_hide">
        <span style="width:inherit;">
          <span class="">本行買入</span>
        </span>
      </th>
      <th class="rate-content-cash print_hide">
        <span style="width:inherit;">
          <span class="">本行賣出</span>
        </span>
      </th>
      <th class="rate-content-sight print_hide hidden-phone" data-hide="phone">
        <span style="width:inherit;">
          <span class="">本行買入</span>
        </span>
      </th>
      <th class="rate-content-sight print_hide hidden-phone" data-hide="phone">
        <span style="width:inherit;">
          <span class="">本行賣出</span>
        </span>
      </th>
      <th class="hidden"></th>

      <th class="display_none_print_show print_width"><span style="width:inherit;">本行買入</span></th>
      <th class="display_none_print_show print_width"><span style="width:inherit;">本行賣出</span></th>
      <th class="display_none_print_show print_width"><span style="width:inherit;">本行買入</span></th>
      <th class="display_none_print_show print_width"><span style="width:inherit;">本行賣出</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-table="幣別" class="currency phone-small-font">
        <div>
          <div class="sp-div sp-japan-div">
            <img title="幣別國旗" alt="幣別國旗" src="/Content/images/sprite_lateral.png" class="sp-img sp-japan-img">
          </div>
          <br class="visible-phone print_hide">
          <div class="visible-phone print_hide">
            日圓 (JPY)
          </div>
          <div class="hidden-phone print_show" style="text-indent:30px;">
            日圓 (JPY)
          </div>
        </div>
      </td>
      <td data-table="本行現金買入" class="rate-content-cash text-right print_hide">0.2999</td>
      <td data-table="本行現金賣出" class="rate-content-cash text-right print_hide">0.2543</td>
      <td data-table="本行即期買入" class="rate-content-sight text-right print_hide hidden-phone" data-hide="phone">0.296</td>
      <td data-table="本行即期賣出" class="rate-content-sight text-right print_hide hidden-phone" data-hide="phone">0.3</td>
      <td data-table="遠期匯率買入/賣出" class="text-center print_hide phone-small-font"><a href="/xrt/forward/JPY">查詢</a></td>
      <td data-table="歷史匯率" class="text-center print_hide phone-small-font"><a href="/xrt/history/JPY" target="_blank">查詢</a></td>
      <td data-table="本行現金買入" class="text-right display_none_print_show print_width">0.2896</td>
      <td data-table="本行現金賣出" class="text-right display_none_print_show print_width">0.3006</td>
      <td data-table="本行即期買入" class="text-right display_none_print_show print_width">0.296</td>
      <td data-table="本行即期賣出" class="text-right display_none_print_show print_width">0.3</td>
    </tr>
  </tbody>
</table>
`;

module.exports = mockHtml;
