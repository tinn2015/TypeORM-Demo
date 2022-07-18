import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Student } from "../entity/Student"
import { Hobby } from '../entity/Hobby'

export class StudentController {

    private userRepository = AppDataSource.getRepository(Student)
    private hobbyRepository = AppDataSource.getRepository(Hobby)

    async all(request: Request, response: Response, next: NextFunction) {
        console.log('111', 111)
        return this.userRepository.find({relations: ["hobbys"]})
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        // 普通一对一关系
        const hobbys = await this.hobbyRepository.save(request.body.hobbys)
        delete request.body.hobbys
        request.body.hobbys = hobbys // 连接两者关系
        return await this.userRepository.save(request.body)
    }

    async saveWidthCascade(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        // 普通一对一关系
        // const hobbys = await this.hobbyRepository.save(request.body.hobbys)
        // delete request.body.hobbys
        // request.body.hobbys = hobbys // 连接两者关系
        return await this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
    }

}