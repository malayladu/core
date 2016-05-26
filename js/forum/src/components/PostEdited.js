import Component from 'flarum/Component';
import humanTime from 'flarum/utils/humanTime';
import extractText from 'flarum/utils/extractText';

/**
 * The `PostEdited` component displays information about when and by whom a post
 * was edited.
 *
 * ### Props
 *
 * - `post`
 */
export default class PostEdited extends Component {
  view() {
    const post = this.props.post;
    const editUser = post.editUser();
    const editedInfo = extractText(app.translator.trans(
      'core.forum.post.edited_tooltip',
      {user: editUser, ago: humanTime(post.editTime())}
    ));

    return (
      <span className="PostEdited" title={editedInfo}>
        {app.translator.trans('core.forum.post.edited_text')}
      </span>
    );
  }

  config(isInitialized) {
    if (isInitialized) return;

    this.$().tooltip();
  }
}
