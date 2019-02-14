//
//  ShareObject.h
//  buttonLongPress
//
//  Created by CR on 2018/8/24.
//  Copyright © 2018年 CR. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ShareObject : NSObject


@property (nonatomic,strong) NSMutableDictionary *mdic;

+ (ShareObject *)shareObject;

@end
