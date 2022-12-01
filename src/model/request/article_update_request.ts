import { Record, String, Partial } from "runtypes";

const MINIMAL_TITLE_LENGTH = 20;
const MINIMAL_CONTENT_LENGTH = 200;
const MINIMAL_CATEGORY_LENGTH = 3;
const STATUS_VALUES = ['publish', 'draft', 'trash']

const requiredRequest = {};
const optionalRequest = {
  title: String.withConstraint(s => s.length >= MINIMAL_TITLE_LENGTH || 'title required, minimal 20 characters'),
  content: String.withConstraint(s => s.length >= MINIMAL_CONTENT_LENGTH || 'content required, minimal 200 characters'),
  category: String.withConstraint(s => s.length >= MINIMAL_CATEGORY_LENGTH || 'category required, minimal 3 characters'),
  status: String.withConstraint(s => STATUS_VALUES.includes(s) || 'status required, value should be publish, draft, or trash')
}


const ArticleUpdateRequest = Record(requiredRequest).And(Partial(optionalRequest));
export default ArticleUpdateRequest;
