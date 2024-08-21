import { unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles';

import zvaadinUploadCss from 'themes/default/components/zvaadin-upload.css?inline';
import vcfPdfViewerCss from 'themes/default/components/vcf-pdf-viewer.css?inline';


if (!document['_vaadintheme_default_componentCss']) {
  registerStyles(
        'zvaadin-upload',
        unsafeCSS(zvaadinUploadCss.toString())
      );
      registerStyles(
        'vcf-pdf-viewer',
        unsafeCSS(vcfPdfViewerCss.toString())
      );
      
  document['_vaadintheme_default_componentCss'] = true;
}

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    window.location.reload();
  });
}

