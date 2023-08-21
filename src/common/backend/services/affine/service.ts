import { CompleteStatus } from 'common/backend/interface';
import { DocumentService, CreateDocumentRequest } from '../../index';

export default class GithubDocumentService implements DocumentService {
  getId = () => {
    return 'affine';
  };

  getUserInfo = async () => {
    return {
      name: 'AFFiNE',
      avatar: '',
      homePage: 'https://affine.pro/',
      description: 'AFFiNE app',
    };
  };

  getRepositories = async () => {
    return [
      {
        id: 'affine-stable',
        name: 'AFFiNE',
        groupId: 'affine',
        groupName: 'AFFiNE',
      },
      {
        id: 'affine-beta',
        name: 'AFFiNE Beta',
        groupId: 'affine-beta',
        groupName: 'AFFiNE Beta',
      },
      {
        id: 'affine-canary',
        name: 'AFFiNE Canary',
        groupId: 'affine-canary',
        groupName: 'AFFiNE Canary',
      },
    ];
  };

  createDocument = async (info: CreateDocumentRequest): Promise<CompleteStatus> => {
    const protocol = info.repositoryId ?? 'affine-stable';
    const url = `${protocol}://new?file=${encodeURIComponent(
      info.title
    )}&content=${encodeURIComponent(info.content)}`;
    window.location.href = url;
    return {
      href: `${protocol}://open?file=${info.title}`,
    };
  };
}
