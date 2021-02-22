import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {ContenuLibre} from "../contenuLibre";
import {useRtl} from "vactory-gatsby-core";

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        content: "<h2>This is heading 2 normal</h2> <h2><em>this is the heading 2 italic</em></h2> <h2><u>this is the heading 2 underline</u></h2> <h2><s><em>this is the heading 2 line thought</em></s></h2> <h2 class=\"text-align-center\">this is the heading 2 center</h2> <h2 class=\"text-align-right\">this is the heading 2 text right</h2> <p class=\"text-align-center\">Text center this is text&nbsp;Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</p> <h3>this is the heading 3</h3> <p>text left this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</p> <p class=\"text-align-justify\">text left this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</p> <p class=\"text-align-right\">text right&nbsp;this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</p> <p><em>text left italic this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</em></p> <p><s>text left line tought this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</s></p> <p><u>text left underlline&nbsp;this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</u></p> <p><strong>text left Bold this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</strong></p> <p><s><u><em><strong>text left Bold line tought line underline italic this is the textLorem ipsum dolor sit amet consectetur adipiscing elit dictumst nunc viverra, tempor eleifend ornare mus tortor nibh eget venenatis velit, rutrum facilisis etiam inceptos dapibus vehicula per tincidunt eu. Lobortis commodo proin blandit, habitant mollis.</strong></em></u></s></p> <p><a class=\"primary\" href=\"/node/1\">this is link</a></p>",
    } : {
        content: "<h3>هذا هو العنوان الكبير</h3>" +
            "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>" +
            "<a href='/node/1'>اقرأ أكثر</a>",
    }
    return (
        <div className="container">
            <ContenuLibre content={data.content}/>
        </div>
    )
}


export default {
    title: 'Dynamic Fields/Contenu Libre',
    decorators: [withKnobs],
};

