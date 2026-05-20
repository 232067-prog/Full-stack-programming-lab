import { rewriteLinks } from '../lib/rewriteLinks';

export default function HtmlBlock({ html }) {
  const safeHtml = rewriteLinks(html || '');
  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
