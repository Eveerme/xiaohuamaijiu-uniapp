import request from '@/utils/request/request'

export function userLogin(code: string) {
	return request("/userInfos/login", "POST", {
		"code": code
	}, true);
}