import Api from '@/services/Api'

export default {
    getHitPlayLists() {
        return Api().get('getHitPlayLists')
    }
}